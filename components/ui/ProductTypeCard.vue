<template>
    <div>
        {{ card.title }}
        <slot />
    </div>
</template>

<script setup>
defineProps({
    card: {
        type: Object,
        required: true
    }
});
</script>