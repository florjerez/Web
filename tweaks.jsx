// Tweaks panel for Flør Jerez Art landing
const { useEffect } = React;

function FlorTweaks(){
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);

  // Hero variant
  useEffect(()=>{
    const ph = document.getElementById('heroPh');
    if(!ph) return;
    const map = {
      video: ['assets/hero-brushstrokes.webp', 'Brushstroke painting'],
      process: ['assets/process-painting.webp', 'Artist at work'],
      earth: ['assets/earth-brushstrokes.webp', 'Earth-tone brushstrokes'],
      frog: ['assets/frog-detail.webp', 'Painting detail'],
    };
    const [src, alt] = map[tweaks.heroVariant] || map.video;
    ph.src = src; ph.alt = alt;
  }, [tweaks.heroVariant]);

  // Nav style
  useEffect(()=>{
    const nav = document.getElementById('nav');
    if(!nav) return;
    if(tweaks.navStyle === 'solid'){
      nav.style.background = 'var(--cream)';
      nav.style.backdropFilter = 'none';
      nav.style.borderBottom = '0.5px solid var(--hairline)';
    } else if(tweaks.navStyle === 'minimal'){
      nav.style.background = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.borderBottom = 'none';
    } else {
      nav.style.background = '';
      nav.style.backdropFilter = '';
      nav.style.borderBottom = '';
    }
  }, [tweaks.navStyle]);

  // Works image scale
  useEffect(()=>{
    const stack = document.querySelector('.works-stack');
    if(!stack) return;
    const scales = { intimate: 0.82, balanced: 1.0, generous: 1.18 };
    const k = scales[tweaks.worksScale] || 1.0;
    stack.style.setProperty('--work-scale', k);
    document.querySelectorAll('.work img').forEach(img => {
      img.style.transform = `scale(${k > 1 ? 1 : 1})`;
    });
    // Adjust max-width via inline style
    document.querySelectorAll('.work').forEach(w => {
      const base = w.classList.contains('size-lg') ? 820
                : w.classList.contains('size-md') ? 640
                : w.classList.contains('size-sm') ? 520 : 720;
      const img = w.querySelector('img');
      if(img){ img.style.maxWidth = `min(${Math.round(base*k)}px, ${Math.round(86*k)}vw)`; }
    });
  }, [tweaks.worksScale]);

  // Process video
  useEffect(()=>{
    const wrap = document.getElementById('processVideoWrap');
    if(!wrap) return;
    wrap.style.display = tweaks.showProcessVideo ? '' : 'none';
    const grid = wrap.parentElement;
    if(grid && grid.classList.contains('philo-grid')){
      grid.style.gridTemplateColumns = tweaks.showProcessVideo ? '' : '1fr';
      grid.style.maxWidth = tweaks.showProcessVideo ? '' : '720px';
      grid.style.margin = tweaks.showProcessVideo ? '' : '120px auto 0';
    }
  }, [tweaks.showProcessVideo]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Hero">
        <TweakRadio
          label="Hero media"
          value={tweaks.heroVariant}
          options={[
            {value:'video', label:'Brushstrokes'},
            {value:'process', label:'Studio'},
            {value:'earth', label:'Earth tones'},
            {value:'frog', label:'Detail'},
          ]}
          onChange={v => setTweak('heroVariant', v)}
        />
      </TweakSection>

      <TweakSection title="Navigation">
        <TweakRadio
          label="Nav style"
          value={tweaks.navStyle}
          options={[
            {value:'frosted', label:'Frosted'},
            {value:'solid', label:'Solid'},
            {value:'minimal', label:'Minimal'},
          ]}
          onChange={v => setTweak('navStyle', v)}
        />
      </TweakSection>

      <TweakSection title="Selected works">
        <TweakRadio
          label="Image scale"
          value={tweaks.worksScale}
          options={[
            {value:'intimate', label:'Intimate'},
            {value:'balanced', label:'Balanced'},
            {value:'generous', label:'Generous'},
          ]}
          onChange={v => setTweak('worksScale', v)}
        />
      </TweakSection>

      <TweakSection title="Philosophy">
        <TweakToggle
          label="Show process video"
          checked={tweaks.showProcessVideo}
          onChange={v => setTweak('showProcessVideo', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const _root = document.createElement('div');
document.body.appendChild(_root);
ReactDOM.createRoot(_root).render(<FlorTweaks />);
