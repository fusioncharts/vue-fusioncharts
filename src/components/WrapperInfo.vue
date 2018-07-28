<template>
    <div class="content-container">
        <WrapperHeader />
        <WrapperFeatures
            :features="config.features"
        />
    </div>
</template>

<script>
import WrapperHeader from './WrapperHeader';
import WrapperFeatures from './WrapperFeatures';

export default {
    name: 'WrapperInfo',
    props: {
        'config':{ type: Object }
    },
    components: {
        WrapperHeader,
        WrapperFeatures
    }
}
</script>
