// Tweaks panel for Flør Jerez Art landing
const { useEffect } = React;

function FlorTweaks(){
  const [tweaks, setTweak] = useTweaks(window.__TWEAKS__);

  // Apply hero variant
  useEffect(()=>{
    const ph = document.getElementById('heroPh');
    if(!ph) return;
    const R = (window.__resources || {});
    if(tweaks.heroVariant === 'video'){
      ph.src = R.heroBrushstrokes || 'assets/hero-brushstrokes.webp';
      ph.alt = 'HERO_VIDEO_URL — brushstroke painting';
    } else if(tweaks.heroVariant === 'process'){
      ph.src = R.processPainting || 'assets/process-painting.webp';
      ph.alt = 'HERO_VIDEO_URL — artist at work';
    } else if(tweaks.heroVariant === 'earth'){
      ph.src = R.earthBrushstrokes || 'assets/earth-brushstrokes.webp';
      ph.alt = 'HERO_VIDEO_URL — earth-tone brushstrokes';
    } else if(tweaks.heroVariant === 'frog'){
      ph.src = R.frogDetail || 'assets/frog-detail.webp';
      ph.alt = 'HERO_VIDEO_URL — painting detail';
    }
  }, [tweaks.heroVariant]);

  // Apply nav style
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

  // Apply works layout
  useEffect(()=>{
    const works = document.querySelectorAll('.work');
    if(!works.length) return;
    if(tweaks.worksLayout === 'asymmetric'){
      works.forEach(w => { w.style.gridColumn = ''; w.style.aspectRatio = ''; w.style.marginTop = ''; });
    } else if(tweaks.worksLayout === 'grid'){
      works.forEach((w,i)=>{
        w.style.gridColumn = `${(i%2)*6 + 1} / span 6`;
        w.style.aspectRatio = '4/5';
        w.style.marginTop = '0';
      });
    } else if(tweaks.worksLayout === 'tall'){
      works.forEach((w,i)=>{
        w.style.gridColumn = `${(i%3)*4 + 1} / span 4`;
        w.style.aspectRatio = '3/4';
        w.style.marginTop = (i%3===1) ? '60px' : '0';
      });
    }
  }, [tweaks.worksLayout]);

  // Toggle process video
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
          label="Layout"
          value={tweaks.worksLayout}
          options={[
            {value:'asymmetric', label:'Asymmetric'},
            {value:'grid', label:'2-up grid'},
            {value:'tall', label:'3-up tall'},
          ]}
          onChange={v => setTweak('worksLayout', v)}
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
