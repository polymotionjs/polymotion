import { writable } from "svelte/store";

// We can't really use $state because it cannot be exported when it's reassigned
export const frame = writable(0);
