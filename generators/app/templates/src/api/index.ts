import service from '@/libs/service'

export function getDemo () {
  return service({
    method: 'get',
    url: '/demo'
  })
}
