/**
 * A QUICK AND DIRTY JAVASCRIPT STACK
 */
function Stack(curr, prev)
{
   this.c = curr;
   this.p = prev;
}
Stack.prototype.Peek = function()
{
   return this.c;
}
Stack.prototype.Pop = function()
{
   return this.p;
}
Stack.prototype.toString = function()
{
   if(this.p === null)
      return (this.c)? this.c : "";

   return [(this.p).toString(), 
	    this.c].join(":");
}
Stack.prototype.IsTail = function()
{
   return (this.p == null);
}

Stack.prototype.Push = function(o)
{
   return new Stack(o, this);
}

/**
 * An Pretty Print Engine Design
 * 
 * A PPE is a singleton class that processes Code in the form of
 * plain-text and turns it into HTML so that the output can be
 * displayed to work with CSS and Javascript. For all intents and 
 * purpose, you can think of it as a compiler, though I don't
 * exactly want to think of it that way. The unique quality about
 * this particular PPE is that it does it without backtracing, so
 * whatever is processed is processed
 *
 * What I would like to discuss is a pattern for 
 */
window.PPE = PPE = (function()
{
   var env = new Stack(null, null);
   var PPEObj = {
      ProcessLine : function(line)
                    {
		    }
   };
   return PPEObj;
})();

