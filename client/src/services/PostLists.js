import Api from '@/service/Api'

export default{
	fetchPosts(){
		return Api.get('lists')
	}
}