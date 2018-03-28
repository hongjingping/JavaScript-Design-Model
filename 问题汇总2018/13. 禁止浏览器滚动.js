Tool.hander=(e)=>{
  e.preventDefault();
  e.stopPropagation();
};
//禁用滚动条
Tool.disableScroll=(id)=>{
  document.getElementById(id).addEventListener('wheel', Tool.hander);
  document.getElementById(id).addEventListener('touchmove', Tool.hander);

};
//解除滚动条禁用
Tool.relieveScroll=(id)=>{
  document.getElementById(id).removeEventListener('wheel', Tool.hander);
  document.getElementById(id).removeEventListener('touchmove', Tool.hander);

};