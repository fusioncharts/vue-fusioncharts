(function() {
    let byId = document.getElementById.bind(document),
        loaderAnim = byId("content-loader-anim"),
        demoContainer = byId("demo-container"),
        currentDemoId = 1,
        errorText = "<p class='error'>Demo could not be loaded due to network problem</p>";

    loaderAnim.style.display = "none";  
    demoContainer.style.display = "none";  

    function loadDemo(demoID) {
        beforeLoading(demoID);
        axios.get(`demo/${demoID}.html`)
             .then(res => {
                 afterLoading(demoID, res.data);
             })
             .catch(err => {
                 afterLoading(demoID, errorText);
             })
    }

    function beforeLoading(demoID) {
        loaderAnim.style.display = "block";
        demoContainer.style.display = "none";
        byId(currentDemoId).style.background = "#fff";
        byId(demoID).style.background = "#f1f1f1";
        currentDemoId = demoID;
    }

    function afterLoading(demoId, content) {
        if(demoId !== currentDemoId)
            return;
        loaderAnim.style.display = "none";
        demoContainer.style.display = "block";
        demoContainer.innerHTML = content;
    }
    
    window.loadDemo = loadDemo;
})();