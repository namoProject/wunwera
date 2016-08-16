module.exports = function (app) {
	 // body...  
	 app.get('/', function(req,res){
	 	res.render('index.ejs');
	 });

	 app.get('/contact', function(req,res){
	 	res.render('contact.ejs',{title:'testsending_page'});
	 });	 
};