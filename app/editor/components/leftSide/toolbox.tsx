import {FC, DragEvent} from 'react';
import {Collapse, Row, Col, type CollapseProps} from 'antd';
import {
  AdsClickOutlined, 
  TextDecreaseOutlined, 
  TextFields as TextFieldsIcon, 
  Input as InputIcon,
  CheckBox as CheckBoxIcon,
  RadioButtonChecked as RadioIcon,
  Image as ImageIcon,
} from '@mui/icons-material';

import {addComponent} from '@/store/editorStore';
import type {IComponentType} from '@/store/editorStore.d';
import getDefaultButtonComponent from '@/utils/getDefaultButtonComponent';
import getDefaultTextComponent from '@/utils/getDefaultTextComponent';

type ToolboxProps = {};

const Toolbox: FC<ToolboxProps> = () => {
  const basicComponents = [
    {
      type: 'button',
      name: 'Button',
      icon: <AdsClickOutlined />
    },
    {
      type: 'text',
      name: 'Text',
      icon: <TextDecreaseOutlined />
    },
    {
      type: 'input',
      name: 'Input',
      icon: <InputIcon />
    },
    {
      type: 'textarea',
      name: 'Textarea',
      icon: <TextFieldsIcon />
    },
    {
      type: 'checkbox',
      name: 'Checkbox',
      icon: <CheckBoxIcon />
    },
    {
      type: 'radio',
      name: 'Radio',
      icon: <RadioIcon />
    },
    {
      type: 'image',
      name: 'Image',
      icon: <ImageIcon />
    }
  ];

  const onBasicComponentClick = (type: IComponentType) => {
    switch(type) {
      case 'button':
        addComponent(getDefaultButtonComponent());
        break;
      case 'text':
        addComponent(getDefaultTextComponent());
        break;
    }
  }

  const onBasicComponentDragStartHandler = (e: DragEvent, type: IComponentType) => {
    switch(type) {
      case 'button':
        console.log('button')
        e.dataTransfer.setData('component', JSON.stringify(getDefaultButtonComponent()));
        break;
      case 'text':
        e.dataTransfer.setData('component', JSON.stringify(getDefaultTextComponent()));
        break;
    }
  }

  const items: CollapseProps['items'] = [
    {
      label: '基础组件',
      key: '1',
      children: (
        <Row gutter={[8, 16]}>
          {basicComponents.map((component) => {
            return (
              <Col span={12} key={component.type}>
                <div 
                  className="p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100"
                  onClick={() => onBasicComponentClick(component.type as IComponentType)}
                  draggable
                  onDragStart={(e) => onBasicComponentDragStartHandler(e, component.type as IComponentType)}
                >
                  {component.icon}
                  <span>{component.name}</span>
                </div>
              </Col>
            )
          })}
        </Row>
      )
    }, {
      label: '高级组件',
      key: '2',
      children: (
        <div>高级组件</div>
      )
    }
  ]

  return <div>
    <Collapse items={items} defaultActiveKey={['1']}></Collapse>
  </div>
}

export default Toolbox;
