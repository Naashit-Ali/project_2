import React from 'react';

let navigationRef = React.createRef();
function navigate(routeName, params) {
  navigationRef.current?.navigate(routeName, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  navigationRef,
  goBack,
};
