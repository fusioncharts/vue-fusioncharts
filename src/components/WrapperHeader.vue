<template>
    <div class="jumbotron banner-bg-3 heroContainer fixed-bg home-banner pl-2 pr-2 pl-sm-3 pr-sm-3 pl-md-3 pr-md-3 pl-lg-6 pr-lg-6 pb-4 pt-4">
        <div class="container container-1440 info-wrapper">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="h1 text-white text-center">
                        <img id="lang-logo" class="img-valign" src="../assets/images/react.svg" width="40" height="40" alt="React" />
                        <img id="fc-logo" class="img-valign" src="../assets/images/fc-min-logo.svg" width="40" height="40" alt="FusionCharts" />
                        <span class="title pl-1">Vue-FusionCharts</span>
                    </div>
                    <div class="h3 text-white text-center mt-2">
                        <span class="sub-title primary">
                            An easy-to-use, lightweight React component for the FusionCharts JavaScript Charting Library
                        </span>
                    </div>
                    <div class="p text-white text-center mt-2">
                        <span class="sub-title secondary">
                            The React-FusionCharts component lets you easily include FusionCharts in your React projects and add interactive charts to
                            your React applications.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VerticalLine from "./VerticalLine";
import images from "./../config/images";
export default {
  name: "WrapperHeader",
  components: {
    VerticalLine
  },
  props: ["logo", "heading", "subHeading"]
};
</script>
