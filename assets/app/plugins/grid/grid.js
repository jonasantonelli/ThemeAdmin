/* =========================================================
 * Grid.js 
 * ========================================================= */


!function($){
    
    var Grid = function(element, options){
        
        this.element = $(element);
           
        //Find elements
        
        this.button_remove  = this.element.find(".remove"); 
        
        this.button_toggle  = this.element.find(".collapse");
        
        this.icon_toggle    = this.button_toggle.find(".fa");
        
        this.body           = this.element.find(".grid-body");
        this.body_height    = null;
     
        this.title          = this.element.find(".grid-title");
        this.title_doubleclick  = this.title.find("h4");
        
        //Apply events
        
        this.button_remove.on("click", $.proxy(this.remove, this));
        this.button_toggle.on("click", $.proxy(this.toggle, this));
        this.title_doubleclick.on("dblclick", $.proxy(this.toggle, this));
                  
    };
    
    
    
    Grid.prototype = {   
        
        constructor: Grid,
        
        open: function(){            
            this.element.removeClass('collapsed'); 
            this.icon_toggle.removeClass("fa-chevron-up").addClass("fa-chevron-down");
            
            this.body.animate({
                height: this.body_height,      
                marginTop: 20
            }, 150);
                                 
        },        
        close: function(){            
            if(!this.element.hasClass('collapsed')){
                
                this.element.addClass('collapsed');
                
                this.icon_toggle.removeClass("fa-chevron-down").addClass("fa-chevron-up");
                    
                this.body_height = this.body.height();
                
                this.body.animate({
                    height: 0,
                    marginTop: 0
                }, 150  );
                               
                
            }
        },        
        remove: function(){
            this.element.remove();
        },        
        toggle: function() {           
            (this.element.hasClass("collapsed")) ? 
                this.open() : 
                this.close();            
        }
    };
    
    
    $.fn.grid = function(option, val){
        return this.each(function () {
			var $this = $(this),
				data = $this.data('grid'),
				options = typeof option === 'object' && option;
			if (!data) {
				$this.data('grid', (data = new Grid(this, $.extend({}, options))));
			}
			if (typeof option === 'string') data[option](val);
		});  
    };
    
    
    
}(window.jQuery);