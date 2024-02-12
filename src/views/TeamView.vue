<script setup>
import TeamHeader from '@/components/Team/TeamHeader.vue'
import TeamTable from '@/components/Team/TeamTable.vue'
import TheTeamFooter from '@/components/Team/TheTeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();

team.fill();

setTimeout(() => {
  team.grow(25)
}, 2000);
</script>

<template>
  <TeamHeader />
  <div class="place-self-center flex flex-col gap-y-3" style="width: 750px">
    <TeamTable />
  </div>
  <TheTeamFooter />
</template>
