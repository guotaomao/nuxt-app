import instance from './default'

export function getUserInfo() {
    console.log('instance', instance)
    return instance.get('/api/getUserInfo')
}