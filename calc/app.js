const mode = document.querySelector('.checkbox');

mode.addEventListener('change',myfunc);

function myfunc()
{
  document.body.classList.toggle('dark');
}

function disp(inp)
{
  document.getElementById('displaybox').value += inp;
  return;
}
// function alerting()
// {
//   alert('DO A VALID OPERATION');
//   document.getElementById('displaybox').value = null;
// }
function sqroot()
{

}
function calculate()
{
  try
  {
    let x =  document.getElementById('displaybox').value;
    {
    y = eval(x);
    document.getElementById('displaybox').value = y;
    }
  }
  catch(err)
  {
    alerting();
  }
}
function clrall()
{
  document.getElementById('displaybox').value = null;
}
function del()
{
  document.getElementById('displaybox').value = document.getElementById('displaybox').value.slice(0,-1);
}

function alerting()
{
  const errmsg  = document.createElement('div');
  const parent = document.querySelector('.calculator');
  const nxtchild = document.querySelector('.next');
  errmsg.className = 'alerting';
  errmsg.appendChild(document.createTextNode('WARNING : DO A VALID OPERATION !!!!!'));
  parent.insertBefore(errmsg,nxtchild);
  setTimeout(clralert,3000);
  function clralert()
  {
    document.querySelector('.alerting').remove();
  }
  document.getElementById('displaybox').value = null; 
}