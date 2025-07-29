import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface LoginCredentialsEmailProps {
  productTitle: string
  username: string
  password: string
  accessUrl: string
  discordUrl: string
  purchaseId: string
}

export const LoginCredentialsEmail = ({
  productTitle,
  username,
  password,
  accessUrl,
  discordUrl,
  purchaseId
}: LoginCredentialsEmailProps) => (
  <Html>
    <Head />
    <Preview>Your {productTitle} login credentials - start using your new research tool!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🎉 Welcome to {productTitle}!</Heading>
        
        <Text style={text}>
          Thank you for your purchase! Your payment has been successfully processed and your account is now ready.
        </Text>

        <Section style={credentialsBox}>
          <Heading style={h2}>Your Login Credentials</Heading>
          
          <Row style={credentialRow}>
            <Column style={labelColumn}>
              <Text style={label}>Username:</Text>
            </Column>
            <Column style={valueColumn}>
              <Text style={credential}>{username}</Text>
            </Column>
          </Row>

          <Row style={credentialRow}>
            <Column style={labelColumn}>
              <Text style={label}>Password:</Text>
            </Column>
            <Column style={valueColumn}>
              <Text style={credential}>{password}</Text>
            </Column>
          </Row>

          <Row style={credentialRow}>
            <Column style={labelColumn}>
              <Text style={label}>Access URL:</Text>
            </Column>
            <Column style={valueColumn}>
              <Link href={accessUrl} style={urlLink}>{accessUrl}</Link>
            </Column>
          </Row>
        </Section>

        <Section style={buttonContainer}>
          <Link
            href={accessUrl}
            style={button}
          >
            Access Your Product Now
          </Link>
        </Section>

        <Section style={instructionsSection}>
          <Heading style={h3}>Getting Started</Heading>
          <Text style={text}>
            1. Click the "Access Your Product Now" button above<br/>
            2. Use your username and password to log in<br/>
            3. Start exploring all the features of {productTitle}<br/>
            4. Save these credentials for future access
          </Text>
        </Section>

        <Section style={discordSection}>
          <Heading style={h3}>Join Our Community</Heading>
          <Text style={text}>
            Connect with other users and get support in our Discord community:
          </Text>
          <Section style={buttonContainer}>
            <Link
              href={discordUrl}
              style={discordButton}
            >
              Join Discord Community
            </Link>
          </Section>
        </Section>

        <Section style={supportSection}>
          <Text style={text}>
            <strong>Need help?</strong> If you have any questions or need assistance, 
            please don't hesitate to contact our support team.
          </Text>
          <Text style={text}>
            Your Purchase ID: <code style={purchaseCode}>{purchaseId}</code>
          </Text>
        </Section>

        <Text style={footer}>
          This email was sent because you completed a purchase for {productTitle}. 
          Please keep this email safe as it contains your login credentials.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default LoginCredentialsEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginTop: '20px',
  marginBottom: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}

const h1 = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 20px 20px',
  padding: '0',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#1a1a1a',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  padding: '0',
}

const h3 = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px',
  padding: '0',
}

const text = {
  color: '#525252',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 20px',
}

const credentialsBox = {
  backgroundColor: '#f8fafc',
  border: '2px solid #e2e8f0',
  borderRadius: '8px',
  margin: '24px 20px',
  padding: '24px',
}

const credentialRow = {
  marginBottom: '12px',
}

const labelColumn = {
  width: '30%',
}

const valueColumn = {
  width: '70%',
}

const label = {
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
}

const credential = {
  color: '#1e293b',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0',
  fontFamily: 'monospace',
  backgroundColor: '#ffffff',
  padding: '8px 12px',
  borderRadius: '4px',
  border: '1px solid #e2e8f0',
}

const urlLink = {
  color: '#3b82f6',
  fontSize: '14px',
  textDecoration: 'underline',
  wordBreak: 'break-all' as const,
}

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 20px',
}

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 28px',
  boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
}

const instructionsSection = {
  margin: '32px 20px 24px',
  padding: '20px',
  backgroundColor: '#fef3c7',
  borderRadius: '8px',
  border: '1px solid #fbbf24',
}

const supportSection = {
  margin: '24px 20px',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
}

const purchaseCode = {
  backgroundColor: '#e5e7eb',
  padding: '2px 6px',
  borderRadius: '4px',
  fontFamily: 'monospace',
  fontSize: '14px',
}

const discordSection = {
  margin: '24px 20px',
  padding: '20px',
  backgroundColor: '#f0f4ff',
  borderRadius: '8px',
  border: '1px solid #7c3aed',
}

const discordButton = {
  backgroundColor: '#7c3aed',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 28px',
  boxShadow: '0 2px 4px rgba(124, 58, 237, 0.3)',
}

const footer = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '24px 20px',
  textAlign: 'center' as const,
}