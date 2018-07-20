<template>
    <div class="container wrapper-info">
        <WrapperHeader
            :logo="config.logo"
            :heading="config.heading"
            :subHeading="config.subHeading"
        />
         <WrapperAbout
            :heading="config.heading"
            :about="config.about"
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
