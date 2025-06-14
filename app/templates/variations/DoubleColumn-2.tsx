import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import { ResumeData } from '@/app/types/resume';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontSize: 11,
    lineHeight: 1.3,
  },
  leftColumn: {
    width: '30%',
    backgroundColor: '#29532e',
    color: 'white',
    padding: 20,
    paddingTop: 30,
    borderRadius: 14,
    margin: "15px 5px 15px 15px"
  },
  rightColumn: {
    width: '70%',
    padding: 14,
    paddingTop: 28,
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 0.01,
    borderColor: 'white',
    overflow: 'hidden',
    marginBottom: 20,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  photo: {
    width: 92,
    height: 92,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'medium',
    borderBottomWidth: 1,
    borderBottomColor: '#7793b3',
    paddingBottom: 6,
    marginBottom: 10,
    color: 'white',
    marginTop: 10
  },
  contactText: {
    fontSize: 10,
    marginBottom: 5,
  },
  educationItem: {
    marginBottom: 10,
  },
  institution: {
    fontSize: 10,
    fontWeight: 'semibold',
    marginBottom: 2,
  },
  degree: {
    fontSize: 9,
    marginBottom: 2
  },
  educationDate: {
    fontSize: 9,
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 4,
    marginLeft: 10,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#213e60',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  surname: {
    fontSize: 23,
    fontWeight: 'normal',
    color: '#213e60',
    textTransform: 'uppercase',
  },
  jobTitle: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 30,
    marginTop: 12
  },
  sectionTitleRight: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#213e60',
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
    paddingBottom: 6,
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 9,
    fontWeight: 'light',
    color: '#213e60',
    marginBottom: 15,
  },
  experienceItem: {
    marginBottom: 12,
  },
  company: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#213e60',
  },
  position: {
    fontSize: 9,
    color: '#234e80',
    marginVertical: 3,
  },
  experienceDate: {
    fontSize: 9,
    fontWeight: 'light',
    color: '#6b7280',
  },
  description: {
    fontSize: 9,
    fontWeight: 'light',
    color: '#213e60',
  },
  qualificationItem: {
    marginBottom: 10,
  },
  qualificationName: {
    fontSize: 10,
    fontWeight: 'semibold',
    color: '#213e60',
  },
  qualificationDate: {
    fontSize: 9,
    fontWeight: 'light',
    color: '#6b7280',
  },
  qualificationIssuer: {
    fontSize: 10,
    color: '#213e60',
  },
});

export const ProfessionalTemplate2 = ({ data }: { data: ResumeData }) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {data.personal.photo && (
              <View style={styles.photoContainer}>
                <Image src={data.personal.photo} style={styles.photo} />
              </View>
            )}

            <View>
              <Text style={styles.sectionTitle}>CONTACT</Text>
              <Text style={styles.contactText}>{data.personal.phone}</Text>
              <Text style={styles.contactText}>{data.personal.email}</Text>
              {data.personal.website && (
                <Text style={styles.contactText}>{data.personal.website}</Text>
              )}
              {data.personal.linkedin && (
                <Text style={styles.contactText}>{data.personal.linkedin}</Text>
              )}
            </View>

            <View>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {data.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.institution}>{edu.institution}</Text>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.educationDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
              ))}
            </View>

            <View>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.skillItem}>• {skill}</Text>
              ))}
            </View>
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            <View>
              <Text style={styles.name}>
                {data.personal.name.toUpperCase()}{' '}
                <Text style={styles.surname}>{data.personal.surname.toUpperCase()}</Text>
              </Text>
              <Text style={styles.jobTitle}>{data.personal.jobTitle}</Text>
            </View>

            <View>
              <Text style={styles.sectionTitleRight}>SUMMARY</Text>
              <Text style={styles.summaryText}>{data.personal.summary}</Text>
            </View>

            <View>
              <Text style={styles.sectionTitleRight}>WORK EXPERIENCE</Text>
              {data.experience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.company}>{exp.company}</Text>
                    <Text style={styles.experienceDate}>
                      {exp.startDate} - {exp.endDate}
                    </Text>
                  </View>
                  <Text style={styles.position}>{exp.position}</Text>
                  <Text style={styles.description}>{exp.description}</Text>
                </View>
              ))}
            </View>

            {data.qualifications.length > 0 && (
              <View>
                <Text style={styles.sectionTitleRight}>QUALIFICATIONS</Text>
                {data.qualifications.map((qual, index) => (
                  <View key={index} style={styles.qualificationItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.qualificationName}>{qual.name}</Text>
                      <Text style={styles.qualificationDate}>{qual.date}</Text>
                    </View>
                    <Text style={styles.qualificationIssuer}>{qual.issuer}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </Page>
      </Document>
    );
};