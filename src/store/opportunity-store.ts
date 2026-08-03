import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Opportunity, OpportunityFormData } from "@/types/opportunity";
import { opportunities as initialData } from "@/data/opportunities";

interface OpportunityStore {
  opportunities: Opportunity[];
  savedIds: string[];
  searchTerm: string;
  selectedCategory: string;
  selectedLocation: string;
  selectedType: string;
  showFeatured: boolean;

  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedType: (type: string) => void;
  setShowFeatured: (show: boolean) => void;
  resetFilters: () => void;

  toggleSave: (id: string) => void;
  isSaved: (id: string) => boolean;

  addOpportunity: (data: OpportunityFormData) => void;
  updateOpportunity: (id: string, data: OpportunityFormData) => void;
  deleteOpportunity: (id: string) => void;

  getFilteredOpportunities: () => Opportunity[];
  getSavedOpportunities: () => Opportunity[];
  getOpportunityById: (id: string) => Opportunity | undefined;

  getStats: () => {
    total: number;
    jobs: number;
    internships: number;
    scholarships: number;
    remote: number;
    expiringSoon: number;
  };
}

export const useOpportunityStore = create<OpportunityStore>()(
  persist(
    (set, get) => ({
      opportunities: initialData.map((opp) => ({
        ...opp,
        status: opp.status || "approved",
      })),
      savedIds: [],
      searchTerm: "",
      selectedCategory: "All",
      selectedLocation: "All",
      selectedType: "All",
      showFeatured: false,

      setSearchTerm: (term) => set({ searchTerm: term }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setSelectedLocation: (location) => set({ selectedLocation: location }),
      setSelectedType: (type) => set({ selectedType: type }),
      setShowFeatured: (show) => set({ showFeatured: show }),

      resetFilters: () =>
        set({
          searchTerm: "",
          selectedCategory: "All",
          selectedLocation: "All",
          selectedType: "All",
          showFeatured: false,
        }),

      toggleSave: (id) => {
        const { savedIds } = get();
        if (savedIds.includes(id)) {
          set({ savedIds: savedIds.filter((sid) => sid !== id) });
        } else {
          set({ savedIds: [...savedIds, id] });
        }
      },

      isSaved: (id) => {
        return get().savedIds.includes(id);
      },

      addOpportunity: (data) => {
        const newOpp: Opportunity = {
          id: Date.now().toString(),
          title: data.title,
          organization: data.organization,
          category: data.category,
          location: data.location,
          type: data.type,
          deadline: data.deadline,
          description: data.description,
          requirements:
            typeof data.requirements === "string"
              ? data.requirements.split("\n").filter((r) => r.trim() !== "")
              : data.requirements,
          tags:
            typeof data.tags === "string"
              ? data.tags
                  .split(",")
                  .map((t) => t.trim())
                  .filter((t) => t !== "")
              : data.tags,
          applyLink: data.applyLink,
          createdAt: new Date().toISOString().split("T")[0],
          isFeatured: data.isFeatured ?? false,
          status: "pending",
        };
        set({ opportunities: [newOpp, ...get().opportunities] });
      },

      updateOpportunity: (id, data) => {
        set({
          opportunities: get().opportunities.map((opp) =>
            opp.id === id
              ? {
                  ...opp,
                  title: data.title,
                  organization: data.organization,
                  category: data.category,
                  location: data.location,
                  type: data.type,
                  deadline: data.deadline,
                  description: data.description,
                  requirements:
                    typeof data.requirements === "string"
                      ? data.requirements
                          .split("\n")
                          .filter((r) => r.trim() !== "")
                      : data.requirements,
                  tags:
                    typeof data.tags === "string"
                      ? data.tags
                          .split(",")
                          .map((t) => t.trim())
                          .filter((t) => t !== "")
                      : data.tags,
                  applyLink: data.applyLink,
                  isFeatured: data.isFeatured ?? opp.isFeatured,
                  status: data.status ?? opp.status,
                }
              : opp,
          ),
        });
      },

      deleteOpportunity: (id) => {
        set({
          opportunities: get().opportunities.filter((opp) => opp.id !== id),
          savedIds: get().savedIds.filter((sid) => sid !== id),
        });
      },

      getFilteredOpportunities: () => {
        const {
          opportunities,
          searchTerm,
          selectedCategory,
          selectedLocation,
          selectedType,
          showFeatured,
        } = get();
        const term = searchTerm.toLowerCase().trim();

        return opportunities.filter((opp) => {
          const isApproved =
            opp.status === "approved" ||
            opp.status === "pending" ||
            !opp.status;

          const matchesSearch =
            !term ||
            opp.title.toLowerCase().includes(term) ||
            opp.organization.toLowerCase().includes(term) ||
            opp.description.toLowerCase().includes(term) ||
            opp.tags.some((tag) => tag.toLowerCase().includes(term));

          const matchesCategory =
            selectedCategory === "All" || opp.category === selectedCategory;
          const matchesLocation =
            selectedLocation === "All" || opp.location === selectedLocation;
          const matchesType =
            selectedType === "All" || opp.type === selectedType;
          const matchesFeatured = !showFeatured || opp.isFeatured;

          return (
            isApproved &&
            matchesSearch &&
            matchesCategory &&
            matchesLocation &&
            matchesType &&
            matchesFeatured
          );
        });
      },

      getSavedOpportunities: () => {
        const { opportunities, savedIds } = get();
        return opportunities.filter((opp) => savedIds.includes(opp.id));
      },

      getOpportunityById: (id) => {
        return get().opportunities.find((opp) => opp.id === id);
      },

      getStats: () => {
        const { opportunities } = get();
        const today = new Date();
        const thirtyDaysFromNow = new Date(
          today.getTime() + 30 * 24 * 60 * 60 * 1000,
        );

        return {
          total: opportunities.length,
          jobs: opportunities.filter((o) => o.category === "Job").length,
          internships: opportunities.filter((o) => o.category === "Internship")
            .length,
          scholarships: opportunities.filter(
            (o) => o.category === "Scholarship",
          ).length,
          remote: opportunities.filter((o) => o.type === "Remote").length,
          expiringSoon: opportunities.filter((o) => {
            const deadline = new Date(o.deadline);
            return deadline <= thirtyDaysFromNow && deadline >= today;
          }).length,
        };
      },
    }),
    {
      name: "kaar-yab-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
