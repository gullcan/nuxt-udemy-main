// plugins/auth.ts
import { defineNuxtPlugin } from "#app";
import { useUserStore } from "~/stores/userStore";

export default defineNuxtPlugin(() => {
  const userStore = useUserStore();
  userStore.observeAuthState();
});
