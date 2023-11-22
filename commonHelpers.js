import{a as y,i,S as p}from"./assets/vendor-da648799.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const L="https://pixabay.com/api/",b="34628461-4bda2ae404146a46c3fd3a186",v={key:b,image_type:"photo",orientation:"horizontal",safesearch:!0},g=async(e,o)=>{try{const{data:t}=await y.get(`${L}`,{params:{...v,q:e,page:o}});return t}catch(t){throw i.error({message:`${t.message}`,layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),new Error(t)}},s={form:document.querySelector(".search-form"),input:document.querySelector(".input"),searchBtn:document.querySelector(".search-btn"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader"),sentinel:document.querySelector(".sentinel")};let c=1,l="",u=0,f=0,a;s.form.addEventListener("submit",I);function I(e){if(e.preventDefault(),s.loader.classList.remove("hidden"),!e.currentTarget.searchQuery.value.trim()){i.error({message:"Sorry, your search query is empty. Please try again.",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),s.loader.classList.add("hidden");return}c=1,l="",u=0,f=0,g(e.currentTarget.searchQuery.value.trim(),c).then(o=>{w(o)}).catch(o=>{s.loader.classList.add("hidden"),console.log(o)}),l=e.currentTarget.searchQuery.value.trim(),e.currentTarget.reset()}function w(e){if(s.loader.classList.add("hidden"),!e.totalHits){i.error({message:"Sorry, we don&apos;t find any images. Please try again.",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"});return}c+=1,f=e.totalHits,u+=e.hits.length,i.success({message:`Hooray! We found ${e.totalHits} images.`,layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),s.list.innerHTML=h(e),a=new p(".gallery a",{captionDelay:250}),a.refresh()}function h({hits:e}){return e.map(t=>`<a class="link" href=${t.largeImageURL} id=${t.id}><div class="photo-card" >
    <div class="img-wrap"><img src=${t.webformatURL} alt=${t.tags} loading="lazy" /></div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            <span>${t.likes}</span>
        </p>
        <p class="info-item">
            <b>Views</b>
            <span>${t.views}</span>
        </p>
        <p class="info-item">
            <b>Comments</b>
            <span>${t.comments}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <span>${t.downloads}</span>
        </p>
    </div>
</div></a>`).join("")}function O(){a.destroy(),g(l,c).then(e=>{s.list.insertAdjacentHTML("beforeend",h(e)),c+=1,u+=e.hits.length,a=new p(".gallery a",{captionDelay:250}),a.refresh()}).catch(e=>{i.error({message:"Something went wrong. Please try again!",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),console.log(e)})}const S=e=>{e.forEach(o=>{o.isIntersecting&&l!==""&&u<f&&O()})},$=new IntersectionObserver(S,{rootMargin:"200px"});$.observe(s.sentinel);
//# sourceMappingURL=commonHelpers.js.map
