const navbarStyles = {
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    zIndex: 1001,
    position: 'fixed',
    left: 0,
  };
  
  const navMenuStyles = {
    display: 'flex',
    listStyleType: 'none',
  };
  
  const navLinkStyles = {
    color: '#F4F4F4',
    textDecoration: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    display: 'inline-block',
    borderRadius: '25px',
    backgroundColor: '#9AC2E6',
    fontWeight: 'bold',
    transition: 'transform 0.3s',
    transform: 'scale(1)',
    marginLeft: 0,
  };
  
  const navLinkDarkStyles = {
    color: '#242424',
    backgroundColor: '#B39DDB',
  };
  
  const logoStyles = {
    color: '#F5F5F5',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    display: 'inline-block',
    borderRadius: '25px',
    backgroundColor: '#9AC2E6',
    transition: 'transform 0.3s',
    transform: 'scale(1)',
    marginLeft: 0,
    userSelect: 'none',
  };
  
  const logoDarkStyles = {
    color: '#242424',
    backgroundColor: '#B39DDB',
  };
  
  const mobileMenuStyles = {
    display: 'none',
  };
  
  const iconStyles = {
    fontSize: '1.5rem',
    cursor: 'pointer',
  };
  
  const socialStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '240px',
  };
  
  const socialLinkStyles = {
    fontSize: '24px',
    marginBottom: '24px',
    marginTop: '24px',
    transition: '0.3s ease-in-out',
  };
  
  const mediaStyles = {
    darklightContainer: {
      marginTop: '-0.4rem',
      marginLeft: '0.4rem',
    },
  };
  
  const mobileMediaStyles = {
    mobileMenu: {
      display: 'flex',
      flexDirection: 'column',
      width: '55%',
      top: 0,
      left: '-100%',
      height: '100%',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(176, 176, 176, 0.7)',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)',
      transition: 'left 0.3s, background-color 0.3s, box-shadow 0.3s, 0.3s ease-out',
      borderRadius: '25px',
      zIndex: 10,
    },
    mobileMenuDark: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    mobileMenuNavlink: {
      marginLeft: '40px',
    },
    darklightContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    darklightToggle: {
      display: 'flex',
      alignItems: 'center',
    },
    darklightIcon: {
      marginRight: '0.5rem',
    },
    active: {
      left: 0,
    },
    mobileNav: {
      margin: '1rem 0',
    },
    mobileMenuLi: {
      padding: '1.2rem 1rem',
      margin: '0 1rem',
      borderBottom: '2px solid rgb(203, 203, 203)',
      listStyleType: 'none',
    },
    mobileMenuLiLastChild: {
      borderBottom: 'none',
    },
    mobileMenuButton: {
      margin: '1rem',
      width: '90%',
    },
    navMenu: {
      display: 'none',
    },
    navIcons: {
      display: 'none',
    },
    fasFaTimes: {
      color: '#242424',
      cursor: 'pointer',
      width: '100%',
      height: '30px',
      borderRadius: '25px',
      padding: '0.5rem 1rem',
      backgroundColor: '#F4F4F4',
      display: 'inline-block',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'scale(1)',
      transition: '0.3s ease-out',
    },
    fasFaTimesDark: {
      color: '#F4F4F4',
      backgroundColor: '#242424',
    },
    fasFaTimesHover: {
      transform: 'scale(1.05)',
      transition: '0.3s ease-in-out',
    },
  };
  
  export {
    navbarStyles,
    navMenuStyles,
    navLinkStyles,
    navLinkDarkStyles,
    logoStyles,
    logoDarkStyles,
    mobileMenuStyles,
    iconStyles,
    socialStyles,
    socialLinkStyles,
    mediaStyles,
    mobileMediaStyles,
  };