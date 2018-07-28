<template>
    <div class="content-container">
        <WrapperHeader
            :logo="config.logo"
            :heading="config.heading"
            :subHeading="config.subHeading"
        />
        <WrapperFeatures
            :features="config.features"
        />
    </div>
</template>

<script>
import WrapperHeader from './WrapperHeader';
import WrapperAbout from './WrapperAbout';
import WrapperFeatures from './WrapperFeatures';

export default {
    name: 'WrapperInfo',
    props: {
        'config':{ type: Object }
    },
    components: {
        WrapperHeader,
        WrapperAbout,
        WrapperFeatures
    }
}
</script>
