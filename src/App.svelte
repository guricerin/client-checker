<script lang="ts">
  import type { ClientInfo } from './lib/client-info'
  import ClientInfoList from './lib/ClientInfoList.svelte';

  const noneString = (s: string | null): string => {
    if (!s || s === '') {
        return '(none)'
    }
    return s
  }

  async function fetchData() {
    const ipinfo = await fetch("https://ipinfo.io?callback").then(res => {
      if (!res.ok) {
        return res.text().then(text => {
          throw new Error(text)
        })
      }
      return res
    }).then(res => res.json())

    const info: ClientInfo = {
      ipAddr: noneString(ipinfo.ip),
      host: noneString(ipinfo.hostname),
      isp: noneString(ipinfo.org),
      region: noneString(ipinfo.region),
      country: noneString(ipinfo.country),
      userAgent: noneString(navigator.userAgent),
      referer: noneString(document.referrer),
      timezone: noneString(ipinfo.timezone),
    }
    return info
  }

  let promise = fetchData()
</script>

<main>
  {#await promise}
    <p>...loading</p>
  {:then info}
    <ClientInfoList info={info} />
  {:catch error}
    <p>{error.message}</p>
  {/await}
</main>
