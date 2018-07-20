<template>
<div><div class="qs-section">
    <h3 class="qs-heading">
        Step 1: Install the <span class="qs-highlight">Vue-FusionCharts</span> wrapper framework
    </h3>
    <p class="qs-text">
        In the terminal run the following command:
    </p>
    <pre class="qs-code language-javascript"><code class=" language-javascript">$ npm install vue<span class="token operator">-</span>fusioncharts <span class="token operator">--</span>save</code></pre>
</div>

<div class="qs-section">
    <h3 class="qs-heading">
        Step 2: Register the <span class="qs-highlight">VueFusionCharts</span> component            
    </h3>
    <p class="qs-text">
        Use the <span class="qs-highlight">Vue.use</span> method to register the component globally            
    </p>
    <pre class="qs-code language-javascript"><code class=" language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueFusionCharts <span class="token keyword">from</span> <span class="token string">'vue-fusioncharts'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> FusionCharts <span class="token keyword">from</span> <span class="token string">'fusioncharts'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Charts <span class="token keyword">from</span> <span class="token string">'fusioncharts/fusioncharts.charts'</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// resolve charts dependency</span>
<span class="token function">Charts</span><span class="token punctuation">(</span>FusionCharts<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// register VueFusionCharts component</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueFusionCharts<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
<p class="qs-text" style="margin-top: 10px;">
    Use the <span class="qs-highlight">Vue.component</span> method to register the component locally         
</p>
<pre class="qs-code language-javascript"><code class=" language-javascript"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> FusionCharts <span class="token keyword">from</span> <span class="token string">'fusioncharts'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Charts <span class="token keyword">from</span> <span class="token string">'fusioncharts/fusioncharts.charts'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FCComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-fusioncharts'</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// resolve charts dependency</span>
<span class="token function">Charts</span><span class="token punctuation">(</span>FusionCharts<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// register Vue-FusionCharts component</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'fusioncharts'</span><span class="token punctuation">,</span> FCComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
</div>

<div class="qs-section">
    <h3 class="qs-heading">
        Step 3: Render your Chart
    </h3>
    <p class="qs-text">
        For example render a simple pie chart
    </p>
    <pre class="qs-code language-javascript"><code class=" language-javascript">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueFusionCharts<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myDataSource <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"chart"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">"caption"</span><span class="token punctuation">:</span> <span class="token string">"Age profile of website visitors"</span><span class="token punctuation">,</span>
        <span class="token string">"subcaption"</span><span class="token punctuation">:</span> <span class="token string">"Last Year"</span><span class="token punctuation">,</span>
        <span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token string">"ocean"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Teenage"</span><span class="token punctuation">,</span>
            <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"1250400"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Adult"</span><span class="token punctuation">,</span>
            <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"1463300"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Mid-age"</span><span class="token punctuation">,</span>
            <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"1050700"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">"label"</span><span class="token punctuation">:</span> <span class="token string">"Senior"</span><span class="token punctuation">,</span>
            <span class="token string">"value"</span><span class="token punctuation">:</span> <span class="token string">"491000"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> chart <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token punctuation">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
    data<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        type<span class="token punctuation">:</span> <span class="token string">'pie2d'</span><span class="token punctuation">,</span>
        width<span class="token punctuation">:</span> <span class="token string">'500'</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token string">'300'</span><span class="token punctuation">,</span>
        dataFormat<span class="token punctuation">:</span> <span class="token string">'json'</span><span class="token punctuation">,</span>
        dataSource<span class="token punctuation">:</span> myDataSource
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p class="qs-text" style="margin-top: 10px;">
    Here's the HTML template for the above example
</p>
<pre class="qs-code language-html"><code class=" language-html">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fusioncharts</span>
        <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>type<span class="token punctuation">"</span></span>
        <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>width<span class="token punctuation">"</span></span>
        <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>height<span class="token punctuation">"</span></span>
        <span class="token attr-name">:dataFormat</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dataFormat<span class="token punctuation">"</span></span>
        <span class="token attr-name">:dataSource</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fusioncharts</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
</div>
</div>
</template>

<script>
export default {
    name: 'QuickStart'
}
</script>