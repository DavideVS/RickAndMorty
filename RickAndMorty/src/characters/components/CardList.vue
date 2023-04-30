<script setup lang="ts">
import CharacterCard from '@/characters/components/characterCard.vue'
import type { Result } from '@/characters/interfaces/characters';

interface Props {
  characters: Result[];
}

const props = defineProps<Props>();

</script>

<template>
    <div class="card-list">
    <CharacterCard
      v-for="character of props.characters"
      :key="character.id"
      :character="character" />
    </div>
</template>

<style scoped>

.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>