<script setup>
// import TeamMember from '@/components/Team/TeamMember.vue';
import team from '@/team.json'
import TeamHeader from '@/components/Team/TeamHeader.vue'
import TeamTable from '@/components/Team/TeamTable.vue'
import TheTeamFooter from '@/components/Team/TheTeamFooter.vue'
</script>

<template>
  <TeamHeader :team="team" />
  <div class="place-self-center flex flex-col gap-y-3" style="width: 750px">
    <TeamTable :team="team" />
    
  </div>

  <TheTeamFooter :team="team" />
</template>
