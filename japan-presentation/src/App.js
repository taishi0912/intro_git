import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Custom Card component to replace shadcn/ui Card
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

// Datasets
const populationData = [
  { year: 2010, total: 128.1, births: 1.071 },
  { year: 2015, total: 127.1, births: 1.005 },
  { year: 2020, total: 125.7, births: 0.840 },
  { year: 2023, total: 124.9, births: 0.770 }
];

const educationData = [
  { age: "Under 25", university: 15, highschool: 28 },
  { age: "25-29", university: 35, highschool: 45 },
  { age: "30-34", university: 30, highschool: 20 },
  { age: "35+", university: 20, highschool: 7 }
];

// スライドの高さを統一するための定数
const STANDARD_HEIGHT = "h-96";
const GRAPH_HEIGHT = "h-[600px]";

const Presentation = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    {/* Title Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h1 className="text-5xl font-bold text-blue-800 mb-6 text-center">
        Strategies for Early Marriage and<br />Population Growth in Japan
      </h1>
      <p className="text-2xl text-gray-600">Towards Demographic Revitalization</p>
      <p className="text-xl text-gray-400 mt-12">Taishi Nakamura</p>
      <p className="text-lg text-gray-400">October 24, 2024</p>
    </Card>

    {/* Population Trends Graph Slide - Orange Theme */}
    <Card className={`w-full ${GRAPH_HEIGHT} p-12 bg-white`}>
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-orange-800 mb-8">Japan's Population Trends</h2>

        <div className="relative">
          <LineChart width={800} height={400} data={populationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              yAxisId="left"
              label={{ value: 'Total Population (Millions)', angle: -90, position: 'insideLeft' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: 'Births (Millions)', angle: 90, position: 'insideRight' }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="total"
              stroke="#c2410c"
              name="Total Population"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="births"
              stroke="#fb923c"
              name="Births"
            />
          </LineChart>
        </div>

        <div className="mt-8 space-y-2 text-sm text-gray-500">
          <p>Source: Statistics Bureau of Japan, Vital Statistics</p>
          <p>URL:
            <a href="https://www.e-stat.go.jp/stat-search/files?page=1&toukei=00450011&tstat=000001028897" className="text-orange-600 hover:underline ml-1">
              https://www.e-stat.go.jp/stat-search/files?page=1&toukei=00450011&tstat=000001028897
            </a>
          </p>
          <p>
            <a href="https://www.mhlw.go.jp/toukei/list/81-1a.html" className="text-orange-600 hover:underline">
              https://www.mhlw.go.jp/toukei/list/81-1a.html
            </a>
          </p>
        </div>
      </div>
    </Card>

    {/* Challenge Statement Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h2 className="text-6xl font-bold text-blue-800 mb-8">3.2M</h2>
      <p className="text-3xl text-gray-600 text-center">
        Population Decline<br />from 2010 to 2023
      </p>
    </Card>

    {/* Solution Approach Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-12">Three Strategic Approaches</h2>
      <ul className="text-2xl text-gray-600 space-y-8">
        <li>1. Educational Support for Early Career Development</li>
        <li>2. Work-Life Balance Enhancement</li>
        <li>3. Social Connection Opportunities</li>
      </ul>
    </Card>

    {/* Education Data Graph Slide - Orange Theme */}
    <Card className={`w-full ${GRAPH_HEIGHT} p-12 bg-white`}>
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-orange-800 mb-8">Education Level and Marriage Age</h2>

        <div className="relative">
          <BarChart width={800} height={400} data={educationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="age"
              label={{ value: 'Age Group', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="university" name="University Graduates" fill="#c2410c" />
            <Bar dataKey="highschool" name="High School Graduates" fill="#fb923c" />
          </BarChart>
        </div>

        <div className="mt-8 space-y-2 text-sm text-gray-500">
          <p>Source: National Institute of Population and Social Security Research</p>
          <p>URL:
            <a href="https://www.ipss.go.jp/ps-doukou/j/doukou16/doukou16_gaiyo.asp" className="text-orange-600 hover:underline ml-1">
              https://www.ipss.go.jp/ps-doukou/j/doukou16/doukou16_gaiyo.asp
            </a>
          </p>
        </div>
      </div>
    </Card>

    {/* Education Impact Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h2 className="text-6xl font-bold text-blue-800 mb-8">2.8 Years</h2>
      <p className="text-3xl text-gray-600 text-center">
        Average Delay in Marriage Age<br />for University Graduates
      </p>
    </Card>

    {/* Education Solutions Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Educational Support Measures</h2>
      <ul className="text-2xl text-gray-600 space-y-6">
        <li>• Credit-Bearing Internships</li>
        <li>• Income-Based Student Loan Repayment</li>
        <li>• Marriage and Childbirth Grants</li>
      </ul>
    </Card>

    {/* Work Style Impact Slide - Orange Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h2 className="text-6xl font-bold text-orange-800 mb-8">46.6h</h2>
      <p className="text-3xl text-gray-600 text-center">
        Average Weekly Working Hours<br />for Young Professionals
      </p>
      <p className="text-sm text-gray-500 mt-8">
        Source: MHLW Working Hours Survey, 2023
        <br />
        <a href="https://www.mhlw.go.jp/toukei/list/128-1.html" className="text-orange-600 hover:underline">
          https://www.mhlw.go.jp/toukei/list/128-1.html
        </a>
      </p>
    </Card>

    {/* Work Style Solutions Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-8">New Work Style Initiatives</h2>
      <ul className="text-2xl text-gray-600 space-y-6">
        <li>• No-Overtime Days</li>
        <li>• Flexible Working Hours</li>
        <li>• Remote Work Options</li>
      </ul>
    </Card>

    {/* Social Connection Impact Slide - Orange Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h2 className="text-6xl font-bold text-orange-800 mb-8">47%</h2>
      <p className="text-3xl text-gray-600 text-center">
        Young Singles Reporting<br />Limited Social Opportunities
      </p>
      <p className="text-sm text-gray-500 mt-8">
        Source: National Institute of Population and Social Security Research
        <br />
        <a href="https://www.ipss.go.jp/ps-doukou/j/doukou16/JNFS16gaiyo.pdf" className="text-orange-600 hover:underline">
          https://www.ipss.go.jp/ps-doukou/j/doukou16/JNFS16gaiyo.pdf
        </a>
      </p>
    </Card>

    {/* Social Connection Solutions Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Social Connection Initiatives</h2>
      <ul className="text-2xl text-gray-600 space-y-6">
        <li>• AI-Powered Matching Platforms</li>
        <li>• Cross-Company Exchange Programs</li>
        <li>• Community Support Systems</li>
      </ul>
    </Card>

    {/* Family Support Impact Slide - Orange Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h2 className="text-6xl font-bold text-orange-800 mb-8">¥30,000</h2>
      <p className="text-3xl text-gray-600 text-center">
        Monthly Support Allowance<br />per Child
      </p>
      <p className="text-sm text-gray-500 mt-8">
        Source: Children and Families Agency, 2024
        <br />
        <a href="https://www.digital.go.jp/policies/child-family-benefits" className="text-orange-600 hover:underline">
          https://www.digital.go.jp/policies/child-family-benefits
        </a>
      </p>
    </Card>

    {/* Family Support Solutions Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Family Support Measures</h2>
      <ul className="text-2xl text-gray-600 space-y-6">
        <li>• 24-Hour Childcare Facilities</li>
        <li>• Free Education Programs</li>
        <li>• Multi-Child Family Housing Support</li>
      </ul>
    </Card>

    {/* Conclusion Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center`}>
      <h2 className="text-3xl font-bold text-blue-800 mb-12">Expected Outcomes</h2>
      <ul className="text-2xl text-gray-600 space-y-6">
        <li>• Lower Average Marriage Age</li>
        <li>• Increased Birth Rate</li>
        <li>• Sustainable Society</li>
      </ul>
    </Card>

    {/* Closing Slide - Blue Theme */}
    <Card className={`w-full ${STANDARD_HEIGHT} p-12 bg-white flex flex-col justify-center items-center`}>
      <h2 className="text-5xl font-bold text-blue-800">Thank You</h2>
    </Card>
  </div>
);

export default Presentation;