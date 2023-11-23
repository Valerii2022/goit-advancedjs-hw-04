import{a as h,i as a,S as p}from"./assets/vendor-da648799.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const L="https://pixabay.com/api/",b="34628461-4bda2ae404146a46c3fd3a186",I={key:b,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40},y=async(e,r)=>{const{data:s}=await h.get(`${L}`,{params:{...I,q:e,page:r}});return s},o={form:document.querySelector(".search-form"),input:document.querySelector(".input"),searchBtn:document.querySelector(".search-btn"),list:document.querySelector(".gallery"),loader:document.querySelector(".loader"),sentinel:document.querySelector(".sentinel")};let c=1,u="",i=0,l=0,d;o.form.addEventListener("submit",v);async function v(e){if(e.preventDefault(),o.loader.classList.remove("hidden"),c=1,u="",i=0,l=0,!e.currentTarget.searchQuery.value.trim()){a.error({message:"Sorry, your search query is empty. Please try again.",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),o.loader.classList.add("hidden"),o.list.innerHTML="";return}try{u=e.currentTarget.searchQuery.value.trim();const r=await y(e.currentTarget.searchQuery.value.trim(),c);O(r),i>=l&&i>0&&a.info({message:"We're sorry, but you've reached the end of search results.",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"})}catch(r){o.loader.classList.add("hidden"),a.error({message:`${r.message}`,layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"})}e.target.reset()}function O(e){if(o.loader.classList.add("hidden"),!e.totalHits){a.error({message:"Sorry, there are no images matching your search query. Please try again.",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),o.list.innerHTML="";return}c+=1,l=e.totalHits,i+=e.hits.length,a.success({message:`Hooray! We found ${e.totalHits} images.`,layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"}),o.list.innerHTML=g(e),d=new p(".gallery a",{captionDelay:250}),d.refresh()}function g({hits:e}){return e.map(s=>`<a class="link" href=${s.largeImageURL} id=${s.id}><div class="photo-card" >
    <div class="img-wrap"><img src=${s.webformatURL} alt=${s.tags} loading="lazy" /></div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            <span>${s.likes}</span>
        </p>
        <p class="info-item">
            <b>Views</b>
            <span>${s.views}</span>
        </p>
        <p class="info-item">
            <b>Comments</b>
            <span>${s.comments}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b>
            <span>${s.downloads}</span>
        </p>
    </div>
</div></a>`).join("")}async function S(){d.destroy();try{const e=await y(u,c);o.list.insertAdjacentHTML("beforeend",g(e)),c+=1,i+=e.hits.length,d=new p(".gallery a",{captionDelay:250}),i>=l&&a.info({message:"We're sorry, but you've reached the end of search results.",layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"})}catch(e){a.error({message:`${e.message}`,layout:2,position:"topLeft",transitionIn:"fadeInRight",transitionOut:"fadeOutLeft"})}}const w=e=>{e.forEach(r=>{r.isIntersecting&&u!==""&&i<l&&S()})},$=new IntersectionObserver(w,{rootMargin:"200px"});$.observe(o.sentinel);
//# sourceMappingURL=commonHelpers.js.map
