<script setup>
defineProps({
    team: Object
});
</script>


<template>
    <footer class="mt-12 bg-gray-100 py-4 text-center text-gray-800">
        <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
      </footer>
</template>
