// ResumeTemplate.tsx
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { ResumeData } from '../types/resume';  // Update this import


interface ResumeTemplateProps {
  data: ResumeData;
  template: number;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export const ResumeTemplate = ({ data, template }: ResumeTemplateProps) => {
  // Template 1 - Basic
  if (template === 1) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            {data.personal.photo && (
              <Image src={data.personal.photo} style={styles.photo} />
            )}
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
              {data.personal.name} {data.personal.surname}
            </Text>
            <Text style={{ fontSize: 14 }}>{data.personal.jobTitle}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Contact</Text>
            <Text style={styles.text}>Phone: {data.personal.phone}</Text>
            <Text style={styles.text}>Email: {data.personal.email}</Text>
            {data.personal.linkedin && (
              <Text style={styles.text}>LinkedIn: {data.personal.linkedin}</Text>
            )}
            {data.personal.website && (
              <Text style={styles.text}>Website: {data.personal.website}</Text>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.text}>{data.personal.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 10 }}>
                <View style={styles.row}>
                  <Text style={styles.subtitle}>{exp.position}</Text>
                  <Text style={styles.text}>
                    {exp.startDate} - {exp.endDate}
                  </Text>
                </View>
                <Text style={styles.subtitle}>{exp.company}</Text>
                <Text style={styles.text}>{exp.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.title}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 10 }}>
                <View style={styles.row}>
                  <Text style={styles.subtitle}>{edu.degree}</Text>
                  <Text style={styles.text}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.subtitle}>{edu.institution}</Text>
                <Text style={styles.text}>{edu.field}</Text>
              </View>
            ))}
          </View>

          {data.qualifications.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.title}>Qualifications</Text>
              {data.qualifications.map((qual) => (
                <View key={qual.id} style={{ marginBottom: 10 }}>
                  <View style={styles.row}>
                    <Text style={styles.subtitle}>{qual.name}</Text>
                    <Text style={styles.text}>{qual.date}</Text>
                  </View>
                  <Text style={styles.text}>{qual.issuer}</Text>
                </View>
              ))}
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.text}>{data.skills.join(', ')}</Text>
          </View>
        </Page>
      </Document>
    );
  }

  // Add more templates as needed (template === 2, template === 3, etc.)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text>Template {template} not implemented yet</Text>
      </Page>
    </Document>
  );
};