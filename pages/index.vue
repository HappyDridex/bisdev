<template>
    <main class="index-page-wrapper">
        <ViewsIndexIntroductionSlide />
        <ViewsIndexAboutUs />
        <ViewsIndexKeyDirections />
        <ViewsIndexCooperationSchemes />
        <ViewsIndexProcessSteps />
        <ViewsIndexMajorDevelopments />
        <ViewsIndexContactInfo />
    </main>
</template>

<style scoped lang="scss">
.index-page-wrapper {
    display: flex;
    flex-direction: column;
    gap: 26px;
}

section {
    min-height: 100vh;
    background: $light-grey;
    padding: 60px;
}

:deep(.page-numeration-title) {
    color: rgba(82, 93, 144, 0.08);
    font-family: $main-title-font;
    font-size: 82px;
}
</style>