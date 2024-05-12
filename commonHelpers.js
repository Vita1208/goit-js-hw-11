import{S as d,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"43838744-76530a55bebff011fa4d493be",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`,i=await fetch(s);if(!i.ok)throw new Error(`Failed to fetch images. Status: ${i.status}`);return i.json()}function m(o,t){const s=o.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <div class="full-image">
                    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                    <ul class="image-button">
                        <li><p>Likes</p><p>${e.likes}</p></li>
                        <li><p>Views</p><p>${e.views}</p></li>
                        <li><p>Comments</p><p>${e.comments}</p></li>
                        <li><p>Downloads</p><p>${e.downloads}</p></li>
                    </ul>
                </div>
            </a>
        </li>
    `).join("");t.innerHTML=s,new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function n(o,t){f[t]({message:o,messageColor:"white",position:"topRight",backgroundColor:"red"})}const c=document.querySelector("form"),u=document.querySelector(".gallery"),l=document.querySelector(".spinner");c.addEventListener("submit",async o=>{o.preventDefault(),u.innerHTML="",l.classList.remove("is-hidden");const t=o.target.elements.search_input.value.trim();if(t===""){n("All form fields must be filled in","warning"),l.classList.add("is-hidden");return}try{const s=await p(t);s.total===0?n("Sorry, no images found. Please try again!","error"):m(s.hits,u)}catch(s){console.error("Error fetching images:",s),n("An error occurred while fetching images. Please try again later.","error")}finally{c.reset(),l.classList.add("is-hidden")}});
//# sourceMappingURL=commonHelpers.js.map
