gsap.registerPlugin(ScrollTrigger);

const punchGrid=document.querySelector('.punch-grid');
for(let i=1;i<=10;i++){const p=document.createElement('span');p.className='punch '+(i<=7?'on':'');p.textContent=i<=7?'✓':i;punchGrid.appendChild(p)}

ScrollTrigger.batch('.reveal',{start:'top 80%',onEnter:batch=>gsap.fromTo(batch,{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.8,stagger:.12,ease:'power3.out'})});
gsap.set('#heroPhone',{transformPerspective:1000});
document.querySelector('[data-section="hero"]').addEventListener('pointermove',e=>{if(innerWidth<768)return;const x=(e.clientX/innerWidth-.5)*12,y=(e.clientY/innerHeight-.5)*-8;gsap.to('#heroPhone',{rotationY:x,rotationX:y,duration:.6,overwrite:'auto'})});

gsap.from('.hero-item',{autoAlpha:0,y:28,duration:1.05,ease:'power2.out',stagger:.08,delay:.1});
gsap.from('.point-count',{textContent:385,duration:1.2,snap:{textContent:1},scrollTrigger:{trigger:'#rewards',start:'top 75%'},onUpdate:function(){this.targets()[0].textContent=Math.round(+this.targets()[0].textContent).toLocaleString()}});
gsap.fromTo('.point-progress',{width:'77%'},{width:'84%',duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'#rewards',start:'top 75%'}});
gsap.from('.punch',{scale:.35,autoAlpha:0,duration:.55,ease:'back.out(2)',stagger:.08,scrollTrigger:{trigger:'#rewards',start:'top 75%'}});
gsap.fromTo('#tuesdayBar',{height:'18%'},{height:'82%',duration:1.3,ease:'power3.out',scrollTrigger:{trigger:'#slow-days',start:'top 70%'}});
gsap.from('.life-step',{autoAlpha:0,y:40,duration:.8,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:'#automation',start:'top 70%'}});
gsap.from('.journey-line',{scaleX:0,duration:1.2,ease:'power2.inOut',scrollTrigger:{trigger:'#automation',start:'top 70%'}});
gsap.from('.life-signal span',{x:-40,autoAlpha:0,duration:1.1,ease:'none',scrollTrigger:{trigger:'#automation',start:'top 70%'}});
gsap.from('.orbit-card',{autoAlpha:0,x:i=>i%2?-70:70,duration:.9,ease:'power3.out',stagger:.12,scrollTrigger:{trigger:'#reach',start:'top 70%'}});
document.querySelectorAll('.counter').forEach(el=>gsap.to(el,{textContent:+el.dataset.value,duration:1.2,snap:{textContent:1},scrollTrigger:{trigger:'#customer-insight',start:'top 70%'},onUpdate:()=>el.textContent=Math.round(+el.textContent).toLocaleString()}));
document.querySelectorAll('.illustrative-send').forEach(btn=>btn.addEventListener('click',e=>{e.currentTarget.textContent='Preview active ✓';document.querySelector('.preview-note').classList.remove('hidden')}));
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a===link))));
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-link').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}})},{root:null,threshold:.55});
document.querySelectorAll('main > section').forEach(section=>navObserver.observe(section));
const branch=document.querySelector('#branchPath');
if(branch){const len=branch.getTotalLength();gsap.set(branch,{strokeDasharray:len,strokeDashoffset:len});gsap.to(branch,{strokeDashoffset:0,duration:1.2,ease:'power2.inOut',scrollTrigger:{trigger:'#referrals',start:'top 70%'}});}