(()=>{const e=new IntersectionObserver((e=>{!e||e.length<1||e.forEach((e=>{e.intersectionRatio>.6&&e.target&&!e.target.hasAttribute("milestone-visible")?e.target.setAttribute("milestone-visible","true"):e.target.removeAttribute("milestone-visible")}))}),{threshold:.6});function t(){const t=document.querySelectorAll("[milestone-observer]");!t||t.length<1||t.forEach((t=>{e.observe(t)}))}t(),requestAnimationFrame(t),window.addEventListener("load",t),window.addEventListener("load",(()=>{document.documentElement.setAttribute("loaded","")}))})();
//# sourceMappingURL=index.07e34bffdec9da1e4e07.2022.js.map