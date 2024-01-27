import React, { useState } from 'react';

export default function About() {
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setBtnText('Enable Light Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Enable Dark Mode');
    }
  };

  const toggleCollapse = (item) => {
    switch (item) {
      case 1:
        setIsCollapsed1(!isCollapsed1);
        break;
      case 2:
        setIsCollapsed2(!isCollapsed2);
        break;
      case 3:
        setIsCollapsed3(!isCollapsed3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              onClick={() => toggleCollapse(1)}
              aria-expanded={isCollapsed1 ? 'false' : 'true'}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${isCollapsed1 ? '' : 'show'}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              onClick={() => toggleCollapse(2)}
              aria-expanded={isCollapsed2 ? 'false' : 'true'}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${isCollapsed2 ? '' : 'show'}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              onClick={() => toggleCollapse(3)}
              aria-expanded={isCollapsed3 ? 'false' : 'true'}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${isCollapsed3 ? '' : 'show'}`}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default,
              until the collapse plugin adds the appropriate classes that we use to style each
              element. These classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom CSS or overriding
              our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">
          {btnText}
        </button>
      </div>
    </div>
  );
}
