<script lang="ts">
  import type { ClientInfo } from './client-info'

  export let info: ClientInfo
</script>

<table>
  <tr>
    <th>項目名</th>
    <th>取得内容</th>
  </tr>

  <tr>
    <th>IP Address</th>
    <td>{info.ipAddr}</td>
  </tr>
  <tr>
    <th>Host</th>
    <td>{info.host}</td>
  </tr>
  <tr>
    <th>ISP</th>
    <td>{info.isp}</td>
  </tr>
  <tr>
    <th>Country</th>
    <td>{info.country}</td>
  </tr>
  <tr>
    <th>Region</th>
    <td>{info.region}</td>
  </tr>
  <tr>
    <th>User Agent</th>
    <td>{info.userAgent}</td>
  </tr>
  <tr>
    <th>Referer</th>
    <td>{info.referer}</td>
  </tr>
  <tr>
    <th>Timezone</th>
    <td>{info.timezone}</td>
  </tr>
</table>
