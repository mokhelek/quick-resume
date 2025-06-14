import React from 'react'
import { ProfessionalTemplate } from './variations/DoubleColumn-1'
import { ProfessionalTemplate2 } from './variations/DoubleColumn-2'

// Define the type for the template mapping
type TemplateComponent = React.ComponentType<{ data: any }> // Component expects a data prop
type TemplateMapping = {
  [key: string]: TemplateComponent
}

const template_id_mapping: TemplateMapping = {
  "1": ProfessionalTemplate,
  "2": ProfessionalTemplate2
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