var React =require('react');

var Main = (props) =>{
  return (
    <div>
      <div>
        <div>
          <p>React Boilerplate</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
