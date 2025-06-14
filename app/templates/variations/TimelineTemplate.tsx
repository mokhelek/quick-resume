import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/app/types/resume';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    color: '#4b5563', // gray-600
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'semibold',
    marginBottom: 4,
    color: '#4b5563', // gray-600
  },
  jobTitle: {
    fontSize: 12,
    color: '#ea580c', // orange-600
    marginBottom: 12,
  },
  content: {
    marginLeft: 30
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 8,
    fontSize: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: '#6b7280', // gray-500
    marginBottom: 16,
    marginTop: 10
  },
  timelineContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  timelineLine: {
    position: 'absolute',
    left: 102,
    top: 20,
    bottom: 0,
    width: 1,
    backgroundColor: '#d1d5db', // gray-300
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: 84,
    marginBottom: 20,
  },
  timelineBullet: {
    position: 'absolute',
    left: 96,
    top: 4,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#ea580c', // orange-600
    backgroundColor: 'white',
    zIndex: 1,
  },
  timelineDate: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 80,
    textAlign: 'right',
    paddingRight: 12,
    fontSize: 10,
    color: '#6b7280', // gray-500
    marginTop:3
  },
  positionTitle: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#4b5563', // gray-600
    marginBottom: 2,
  },
  companyName: {
    fontSize: 10,
    color: '#ea580c', // orange-600
    marginBottom: 4,
  },
  description: {
    fontSize: 10,
    color: '#414b5c', // gray-700
    lineHeight: 1.4,
    fontWeight: 300

  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  skillTag: {
    backgroundColor: '#f3f4f6', // gray-100
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 9,
    color: '#374151', // gray-700
  },
  qualificationItem: {
    marginBottom: 12,
  },
  qualificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  qualificationName: {
    fontSize: 11,
    fontWeight: 'semibold',
    color: '#6b7280', // gray-500
  },
  qualificationDate: {
    fontSize: 9,
    fontWeight: 'light',
    color: '#6b7280', // gray-500
  },
  qualificationIssuer: {
    fontSize: 11,
    color: '#ea580c', // orange-600
  },
});

export const TimelineTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.name} {data.personal.surname}</Text>
          <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>

          <View style={styles.contactInfo}>
            <Text>{data.personal.phone}</Text>
            <Text>{data.personal.email}</Text>
            {data.personal.website && <Text>{data.personal.website}</Text>}
            {data.personal.linkedin && <Text>{data.personal.linkedin}</Text>}
          </View>
        </View>

        {/* Summary */}
        <View>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.description}>{data.personal.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.timelineContainer}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <View style={styles.timelineLine} />

          {data.experience.map((exp, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineBullet} />
              <Text style={styles.timelineDate}>{exp.startDate} - {exp.endDate}</Text>

              <View style={styles.content}>
                <Text style={styles.positionTitle}>{exp.position}</Text>
                <Text style={styles.companyName}>{exp.company}</Text>
                <Text style={styles.description}>{exp.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.timelineContainer}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.timelineLine} />

          {data.education.map((edu, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineBullet} />
              <Text style={styles.timelineDate}>{edu.startDate} - {edu.endDate}</Text>

              <View style={styles.content} >
                <Text style={styles.positionTitle}>{edu.institution}</Text>
                <Text style={styles.companyName}>{edu.degree}</Text>
                {edu.field && <Text style={styles.description}>{edu.field}</Text>}
              </View>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </View>

        {/* Qualifications */}
        {data.qualifications.length > 0 && (
          <View>
            <Text style={styles.sectionTitle}>Certifications</Text>

            {data.qualifications.map((qual, index) => (
              <View key={index} style={styles.qualificationItem}>
                <View style={styles.qualificationHeader}>
                  <Text style={styles.qualificationName}>{qual.name}</Text>
                  <Text style={styles.qualificationDate}>{qual.date}</Text>
                </View>
                <Text style={styles.qualificationIssuer}>{qual.issuer}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};