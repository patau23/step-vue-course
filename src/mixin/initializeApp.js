import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
      // CHANGE_LOADING: "CHANGE_LOADING",
      // GET_RECORDS: "Records/GET_RECORDS",
      GET_CATEGORIES: "Categories/GET_CATEGORIES",
    }),
    initApp() {
      this.GET_CATEGORIES();
    },
  },
};
