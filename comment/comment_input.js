var commentInput ={
	template:`
	<div class='cinput'>
		<label>
			<span>用户名</span>
			<input v-model='author' />
		</label>
		
		<label>
			<span>评论内容</span>
			<textarea v-model='content'></textarea>
		</label>
		
		<button @click='doSave' id='btn'>发布</button>
	
	</div>
	`
	,
	data(){ return{
		author: '',
		content: ''
	}},
	methods: {
		doSave(){
			if(!this.author){
				return alert("用户名不能为空！")
			}
			if(!this.content){
				return alert("评论不能为空！");
			}
			//更新保存 localStorage里的作者名
			localStorage.setItem('vvv-authorname',this.author);
			
			//console.log(this.author,this.content);
			//$emit发射,广播出去
			this.$emit('baocun',{
				id: + new Date(),
				author: this.author,
				content: this.content
			});
			
			//点击保存后内容就清空
			this.content = '';
			
			/*保存到父节点*/
			/*this.$parent.comment.push({
				id:+new Date(),
				auhor:this.auhor,
				content:this.content
			});*/
			
		}
	},
	created(){
		const authorname = localStorage.getItem('vvv-authorname',this.author);
		if(authorname){
			this.author = authorname;
		}
	}
};

//导出
//default 代表默认导出，一个模块只能有一个
/*export default commentInput;*/
