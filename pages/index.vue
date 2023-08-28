<template>
    <main class="index-page-wrapper">
        <ViewsIndexIntroductionSlide />
        <ViewsIndexAboutUs />
        <ViewsIndexKeyDirections />
        <ViewsIndexCooperationSchemes />
        <ViewsIndexProcessSteps />
        <ViewsIndexMajorDevelopments />
        <ViewsIndexTeamMembers v-if="false" />
        <ViewsIndexContactInfo />
    </main>
</template>

<style scoped lang="scss">
.index-page-wrapper {
    display: flex;
    flex-direction: column;
    gap: 26px;

    @media(max-width: $breakpoint5) {
        gap: 14px;
    }
}

section {
    min-height: 100vh;
    background: $light-grey;
    padding: 60px 80px;

    @media(max-width: $breakpoint2) {
        padding: 50px;
    }

    @media(max-width: $breakpoint3) {
        padding: 40px;
    }

    @media(max-width: $breakpoint4) {
        padding: 30px 20px;
    }

    @media(max-width: $breakpoint5) {
        padding: 15px 10px;
    }
}

:deep(.page-numeration-title) {
    color: rgba(82, 93, 144, 0.08);
    font-family: $main-title-font;
    font-size: 82px;

    @media(max-width: $breakpoint3) {
        display: none;
    }
}
</style>