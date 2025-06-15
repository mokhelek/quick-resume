import React from 'react'
import { ProfessionalTemplate } from './variations/DoubleColumn-1'
import { TimelineTemplate } from './variations/TimelineTemplate'
import { CreativeBoldTemplate } from './variations/CreativeBoldTemplate'
import { ContemporaryTemplate } from './variations/ContemporaryTemplate'

type TemplateComponent = React.ComponentType<{ data: any }> 
type TemplateMapping = {
  [key: string]: TemplateComponent
}

const template_id_mapping: TemplateMapping = {
  "1": ProfessionalTemplate,
  "2": TimelineTemplate,
  "4": CreativeBoldTemplate,
  "5": ContemporaryTemplate
}

interface TemplateProps {
  templateId: number
  data: any // Add data prop to the interface
}

function Template({ templateId, data }: TemplateProps) {
  const SelectedTemplate = template_id_mapping[templateId]
  
  if (!SelectedTemplate) {
    return <div>Template not found</div>
  }

  return (
      <SelectedTemplate data={data} />
  )
}

export default Template