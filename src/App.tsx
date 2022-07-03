import { DownloadOutlined } from '@ant-design/icons'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Radio, Tooltip } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { useState } from 'react'
import './App.less'
const App = () => {
  const [size, setSize] = useState<SizeType>('large')
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value='large'>Large</Radio.Button>
        <Radio.Button value='default'>Default</Radio.Button>
        <Radio.Button value='small'>Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type='primary' size={size}>
        Primary
      </Button>
      <Button size={size}>Default</Button>
      <Button type='dashed' size={size}>
        Dashed
      </Button>
      <br />
      <Button type='link' size={size}>
        Link
      </Button>
      <Tooltip title='search'>
        <Button shape='circle' icon={<SearchOutlined />} size='large' />
      </Tooltip>
      <br />
      <Button type='primary' icon={<DownloadOutlined />} size={size} />
      <Button type='primary' shape='circle' icon={<DownloadOutlined />} size={size} />
      <Button type='primary' shape='round' icon={<DownloadOutlined />} size={size} />
      <Button type='primary' shape='round' icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
      <Button type='primary' icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
    </>
  )
}

export default App
