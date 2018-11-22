var commentList ={
	props: ['comments'],
	methods:{
		doDelete(id){
			this.$emit('shanchuzhiwo',id);	
		}
	},
	template:`
		<div class='clist'>
			<comment v-for='c in comments'
				:comm='c' :key = 'c.id' @shanchuzhiwo='doDelete'>
			</comment>
		</div>
	`
};

var commentItem = {
	props:['comm'],
	methods:{
		deleteMe(){
			this.$emit('shanchuzhiwo',this.comm.id);
		}
	},
	template:`
		<div class='comment'>
			<span class='comment-author'>{{comm.author}}</span>
			<span class='comment-content'>:{{comm.content}}</span>
			<a href @click.prevent='deleteMe' class='comment-delete'>删除</a>
		</div>
	`
}

/*export { commentList,commentItem };*/
