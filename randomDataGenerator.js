// randomDataGenerator.js


const language = ['English', 'Shona', 'Ndebele'];

const firstNames  = {
  Shona: ['Aizivaishe', 'Akatendeka', 'Anaishe', 'Anatswanashe', 'Aneni', 'Anenyasha', 'Anerudo', 'Anesu', 'Anochengeta', 'Anodiwa', 'Anokosha', 'Anoona', 'Danai', 'Fadziso', 'Maita', 'Miriro', 'Mudiwa', 'Mufaro', 'Ropafadzo', 'Rufaro', 'Ruwadzano', 'Tonderayi', 'Vimbo', 'Zendaya', 'Akashinga', 'Akudzwe', 'Anengoni', 'Anopa', 'Ariko', 'Banga', 'Chamai', 'Chatunga', 'Chenziri', 'Chuma', 'Davidzo', 'Gamba', 'Garai', 'Hondo', 'Itai', 'Kutenda', 'Masimba', 'Mugabe', 'Munesu', 'Rudo', 'Runako', 'Shohiwa', 'Takudzwa', 'Tanaka', 'Wataida','Nyasha', 'Danai', 'Sekai', 'Mutsa', 'Chipo', 'Munashe', 'Tanatswa', 'Tendo', 'Tawanda', 'Panashe', 'Tarisai', 'Tumai', 'Tinashe', 'Kudakwashe', 'Nakai', 'Tavonga', 'Farai', 'Tariro', 'Mufaro', 'Kumbirai', 'Tendai', 'Anesu', 'Anashe', 'Paidamoyo', 'Tatenda', 'Tadiwa', 'Ruvarashe', 'Zvikomborero', 'Rufaro', 'Munyaradzi', 'Taurai', 'Vongai', 'Tanaka', 'Chido', 'Ngoni', 'Mazvita', 'Tafadzwa', 'Kuda', 'Kundai', 'Ngonidzashe', 'Rudo', 'Hama', 'Mudiwa', 'Mukai', 'Tapiwa', 'Nyarai', 'Tawananyasha', 'Batsirai', 'Kudzai', 'Takunda', 'Tafara', 'Shingai', 'Rutendo', 'Fungai', 'Fadzai', 'Gamuchirai', 'Tinotenda', 'Tanyaradzwa', 'Tashinga', 'Tanga'],
  Ndebele: ['Zamani', 'Zibusiso', 'Ziboniso', 'Sakhile', 'Bongani', 'Bunjiwe', 'Siyabonga', 'Dalubuhle', 'Sibongile', 'Sibusisiwe', 'Sibusiso', 'Sibangani', 'Senzangakhona', 'Sibangilizwe', 'Smilo', 'Ntombizodwa', 'Ntombiyakhe', 'Thando', 'Thandiwe', 'Mandla', 'Mbuso', 'Mthandazo', 'Mehluli', 'Melusi', 'Mlamuleli', 'Mlamuli', 'Mthulisi', 'Mgcini', 'Busani', 'Bhekizwe', 'Zandile', 'Zenzo', 'Lindani', 'Thokozani', 'Mandlenkosi', 'Nomalanga', 'Simangaliso', 'Silibaziso', 'Xolani', 'Xolisani', 'Zodwa', 'Celani', 'Gcinukuthula', 'Qalani', 'Likhwa', 'Thabani', 'Thulani', 'Nokuthula', 'Lingadani', 'Ndabicacile', 'Ayanda', 'Zandile', 'Zanele', 'Zinhle', 'Nhlanhla', 'Samukeliso', 'Jabulani', 'Bhekimpilo', 'Philani', 'Themba', 'Thembelani', 'Sikhumbuzo', 'Sithandazile', 'Langa', 'Langelihle', 'Ntokozo', 'Ntando', 'Ntandoyenkosi', 'Nhlalo', 'Nonhlanhla', 'Nomagugu', 'Gugulethu', 'Sthandisiwe', 'Sthandekile', 'Thandazani', 'Mqabuko', 'Nqinekile', 'Bekithemba', 'Nomaqhawe', 'Lifa', 'Lifalakhe', 'Andile', 'Anele', 'Mqondisi', 'Lungisani', 'Qhawe', 'Sukoluhle', 'Suku', 'Ndodana', 'Njabulo', 'Khethiwe', 'Ndabezinhle', 'Ndaba', 'Tholumusa', 'Hlengiwe', 'Sihlengisizwe', 'Sitshengisiwe', 'Nothando', 'Nomusa', 'Nomathemba', 'Nomaqhawe', 'Musa', 'Nkanyiso', 'Sikhanyile', 'Gugulethu', 'Mpilo', 'Nosipho', 'Sipho', 'Nkululeko', 'Thandeka', 'Zanele', 'Bhekani', 'Ntokozo', 'Sifiso', 'Siyanda', 'Thabisani', 'Njabulo', 'Zodwa', 'Thembeka', 'Philile', 'Londiwe', 'Sibusiso', 'Noluthando', 'Nkosinathi', 'Thulile', 'Sindisiwe', 'Siphamandla', 'Sipho', 'Sizwe', 'Sanele', 'Siyabulela', 'Saneh', 'Phiwokuhle', 'Nokwanda', 'Nokubonga', 'Nkosingiphile', 'Nokuphila', 'Nomvula', 'Nolwazi', 'Nokwethemba', 'Nokulunga', 'Nkazimulo', 'Khululiwe', 'Kwanele', 'Kwenzakwenkosi', 'Thina', 'Sanele', 'Sibusisiwe', 'Tholwethu', 'Thabang', 'Thandekile', 'Mbalienhle', 'Mandisi', 'Mfundo', 'Mvelo', 'Mthobisi', 'Nompumelelo', 'Nomcebo', 'Nkosinathi', 'Nqobile', 'Omphemetse', 'Onkarabile', 'Onkabetse', 'Onkgopotse', 'Palesa', 'Phiwokwakhe', 'Phiwokwethemba', 'Phumzile', 'Pono', 'Reabetsoe', 'Realeboga', 'Reamogetse', 'Refiloe', 'Saneliswa', 'Sbongakonke', 'Sekelani', 'Sibusiso', 'Sihle', 'Simphiwe', 'Siphokazi', 'Sizakele', 'Sizolwethu', 'Snenhlanhla', 'Sphamandla', 'Thembalihle', 'Thembisile', 'Thokozile', 'Thulisile', 'Tumelo', 'Vuyolwethu', 'Wandile', 'Xolile'],
  English: ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emma', 'Daniel', 'Olivia', 'James', 'Sophia'],
};

const lastNames  = {
  Shona: ['Gumbo','Hove', 'Shoko', 'Mapfumo', 'Simango', 'Masuku', 'Marufu', 'Mudenda', 'Makoni', 'Muyambo', 'Nyandoro','Chuma', 'Takawira', 'Chauke', 'Zuze', 'Muchenje', 'Sigauke', 'Munemo',  'Mudzingwa', 'Taruvinga', 'Mutasa', 'Mahachi', 'Katsande', 'Ndoro', 'Mbedzi', 'Chari', 'Muza', 'Munsaka', 'Mapuranga', 'Mutero', 'Maseko', 'Nyika', 'Muchemwa', 'Mubaiwa', 'Mudimba', 'Sande', 'Gondo', 'Chiwara', 'Munetsi', 'Mushonga',  'Kaseke', 'Chifamba', 'Mumpande', 'Mabhena', 'Nyamadzawo', 'Mangena', 'Makaza','Shava', 'Masango', 'Tigere', 'Manyika', 'Gatsi', 'Shereni', 'Makumbe',  'Shonhiwa', 'Muzamba', 'Mandaza', 'Magaya', 'Mangwiro', 'Gwenzi', 'Ruzvidzo', 'Nyakudya', 'Tapera', 'Makombe', 'Madondo', 'Mguni', 'Mabika', 'Chibanda', 'Mandizvidza', 'Makore', 'Muzenda', 'Mwale', 'Mugwagwa', 'Mugabe', 'Hungwe', 'Majoni', 'Chibaya', 'Matambo', 'Masawi', 'Machingura', 'Gomo', 'Rusere', 'Nyamande', 'Makuyana', 'Mashiri', 'Mutema', 'Musonza', 'Muchena','Chakanyuka', 'Gumede', 'Masunda',  'Matsika', 'Zenda', 'Chikukwa', 'Matope', 'Chimombe', 'Jongwe', 'Makina', 'Vambe','Mugari', 'Jonasi', 'Rwodzi', 'Chiyangwa', 'Zondo', 'Mutizwa', 'Zimunya', 'Mutanga', 'Mwinde', 'Musiiwa', 'Chamunorwa', 'Denhere', 'Jani', 'Zindoga', 'Mavhura', 'Munkombwe', 'Maramba', 'Njanji', 'Machona', 'Masocha', 'Madamombe',  'Chirwa', 'Makiwa', 'Saidi', 'Gwatidzo', 'Mawere', 'Matongo', 'Matiza', 'Simbi', 'Chinembiri',  'Zimuto', 'Charamba', 'Mapurisa', 'Zhakata', 'Mazarura', 'Mhembere', 'Jimu', 'Marange', 'Sibindi', 'Matare', 'Mwanza', 'Mkwananzi', 'Ngorima', 'Musarurwa', 'Mutize', 'Muzanenhamo', 'Mujuru', 'Motsi', 'Murwira', 'Mwembe', 'Chinyama', 'Mbewe', 'Marowa', 'Katiyo', 'Paradza', 'Nyikadzino', 'Mawire', 'Chiweshe', 'Mamvura', 'Munyoro', 'Marimo', 'Muzondo', 'Maponga', 'Tafirenyika', 'James', 'Mugadza', 'Ngirazi', 'Hadebe', 'Tsuro', 'Khupe', 'Masiya', 'Shoniwa', 'Mashingaidze', 'Mafuta', 'Mashava', 'Msipa', 'Siwela', 'Taderera', 'Mashonganyika', 'Mudimu', 'Tavengwa', 'Mhaka', 'Nhamo', 'Kunaka', 'Mafukidze', 'Chirume', 'Madziva','Marume', 'Madzinga', 'Musariri', 'Chikomo', 'Manjengwa', 'Kwaramba', 'Nyamayaro', 'Mhike', 'Gumpo', 'Antonio', 'Nyakabau', 'Mavhunga', 'Nyamukondiwa', 'Gono', 'Saungweme', 'Shamu', 'Chamboko', 'Choto', 'Kwenda', 'Mashoko', 'Mugande', 'Mukono', 'Chipunza', 'Gore', 'Mudavanhu', 'Sango', 'Nyama', 'Tinarwo', 'Chikuni', 'Kanyemba', 'Mafu', 'Makosa', 'Chinyanga', 'Ngoma',  'Rusike', 'Nsingo', 'Mhandu', 'Makusha', 'Shiri', 'Zisengwe', 'Munenge', 'Nyambo', 'Shambare', 'Moyana', 'Mushore', 'Masuka', 'Macheka', 'Tanyanyiwa', 'Kufa', 'Mangezi', 'Runesu', 'Matanda', 'Matema', 'Matutu', 'Mbano', 'Bere', 'Mhizha', 'Mafunga', 'Gurure', 'Chimedza', 'Tomu', 'Mataruse', 'Makwara', 'Tsiga', 'Goredema', 'Tapfumaneyi','Chinyoka', 'Mangwende', 'Chivasa', 'Mandeya', 'Machaya', 'Chabata', 'Charuma', 'Matanhire', 'Choga', 'Zinyemba', 'Khumbula', 'Gambiza',  'Machaka', 'Tapfuma', 'Musara', 'Madzima', 'Madziwa', 'Mbofana', 'Pedzisai', 'Matenga', 'Chikwanda', 'Manyere', 'Munyaradzi', 'Jeke', 'Dzapasi', 'Mhere', 'Gutu', 'Ngwerume', 'Mumba'],
  Ndebele: ['Moyo', 'Ncube', 'Sibanda', 'Dube', 'Ndlovu', 'Mpofu', 'Sithole', 'Ngwenya', 'Phiri', 'Tshuma', 'Nyoni', 'Nkomo', 'Nyathi', 'Ndhlovu', 'Mhlanga', 'Khumalo', 'Zhou', 'Banda', 'Shumba', 'Bhebhe', 'Ndebele', 'Muleya', 'Siziba', 'Ndou', 'Maphosa', 'Tembo','Mlambo', 'Dhliwayo',  'Maposa',, 'Mlilo', 'Zulu', 'Mathe',  'Mpala','Lunga', 'Nkala','Dlamini', 'Dlodlo', 'Vundla', 'Hlabangana', 'Sikhosana','Munkuli', 'Ngulube','Ntini', 'Nkomazana',  'Mlalazi',  'Nkiwane','Mlotshwa', 'Musekiwa', 'Dhlamini', 'Mahlangu','Mtetwa','Ndiweni','Mkandla', 'Mutandwa',  'Nxumalo', 'Malunga','Mnkandla','Mtisi', 'Mlauzi','Nduna', 'Meki', 'Sakala','Tshabalala', 'Mutale',  'Khanye',],
  English: ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'King', 'Wright', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook'],
};

const citySuburbs = {
  Harare: ['Avondale', 'Borrowdale', 'Mount Pleasant', 'Mbare', 'Mabelreign', 'Dawnvile', 'Hatfield', 'Highfields', 'Kambuzuma', 'GlenView', 'Waterfalls', 'Epworth', 'Crambone', 'Highlands', 'Chisipite', 'Westgate', 'Westlea', 'Eastlea'],
  Bulawayo: ['Hillside', 'Kumalo', 'Selborne Park', 'Barham Green', 'Waterford'],
  Chitungwiza: ['Zengeza', 'St Marys', 'Seke', 'Nyatsime', 'Unit L'],
  Mutare: ['Murambi', 'Dangamvura', 'Darlington', 'Morningside', 'Fairbridge Park'],
  Gweru: ['Lundi Park', 'Windsor Park', 'Senga', 'Athlone', 'Ridgemont'],
  // Add more cities and their suburbs
};

const emailHosts = [
  'outlook', 'gmail', 'icloud', 'yahoo'
];

const config = {
  emailHosts : [
    'outlook', 'gmail', 'icloud', 'yahoo'
  ],
  countries :{
    zimbabwe:{
      language: ['English', 'Shona', 'Ndebele'],
      firstNames: {
        Shona: ['Aizivaishe', 'Akatendeka', 'Anaishe', 'Anatswanashe', 'Aneni', 'Anenyasha', 'Anerudo', 'Anesu', 'Anochengeta', 'Anodiwa', 'Anokosha', 'Anoona', 'Danai', 'Fadziso', 'Maita', 'Miriro', 'Mudiwa', 'Mufaro', 'Ropafadzo', 'Rufaro', 'Ruwadzano', 'Tonderayi', 'Vimbo', 'Zendaya', 'Akashinga', 'Akudzwe', 'Anengoni', 'Anopa', 'Ariko', 'Banga', 'Chamai', 'Chatunga', 'Chenziri', 'Chuma', 'Davidzo', 'Gamba', 'Garai', 'Hondo', 'Itai', 'Kutenda', 'Masimba', 'Mugabe', 'Munesu', 'Rudo', 'Runako', 'Shohiwa', 'Takudzwa', 'Tanaka', 'Wataida','Nyasha', 'Danai', 'Sekai', 'Mutsa', 'Chipo', 'Munashe', 'Tanatswa', 'Tendo', 'Tawanda', 'Panashe', 'Tarisai', 'Tumai', 'Tinashe', 'Kudakwashe', 'Nakai', 'Tavonga', 'Farai', 'Tariro', 'Mufaro', 'Kumbirai', 'Tendai', 'Anesu', 'Anashe', 'Paidamoyo', 'Tatenda', 'Tadiwa', 'Ruvarashe', 'Zvikomborero', 'Rufaro', 'Munyaradzi', 'Taurai', 'Vongai', 'Tanaka', 'Chido', 'Ngoni', 'Mazvita', 'Tafadzwa', 'Kuda', 'Kundai', 'Ngonidzashe', 'Rudo', 'Hama', 'Mudiwa', 'Mukai', 'Tapiwa', 'Nyarai', 'Tawananyasha', 'Batsirai', 'Kudzai', 'Takunda', 'Tafara', 'Shingai', 'Rutendo', 'Fungai', 'Fadzai', 'Gamuchirai', 'Tinotenda', 'Tanyaradzwa', 'Tashinga', 'Tanga'],
        Ndebele: ['Zamani', 'Zibusiso', 'Ziboniso', 'Sakhile', 'Bongani', 'Bunjiwe', 'Siyabonga', 'Dalubuhle', 'Sibongile', 'Sibusisiwe', 'Sibusiso', 'Sibangani', 'Senzangakhona', 'Sibangilizwe', 'Smilo', 'Ntombizodwa', 'Ntombiyakhe', 'Thando', 'Thandiwe', 'Mandla', 'Mbuso', 'Mthandazo', 'Mehluli', 'Melusi', 'Mlamuleli', 'Mlamuli', 'Mthulisi', 'Mgcini', 'Busani', 'Bhekizwe', 'Zandile', 'Zenzo', 'Lindani', 'Thokozani', 'Mandlenkosi', 'Nomalanga', 'Simangaliso', 'Silibaziso', 'Xolani', 'Xolisani', 'Zodwa', 'Celani', 'Gcinukuthula', 'Qalani', 'Likhwa', 'Thabani', 'Thulani', 'Nokuthula', 'Lingadani', 'Ndabicacile', 'Ayanda', 'Zandile', 'Zanele', 'Zinhle', 'Nhlanhla', 'Samukeliso', 'Jabulani', 'Bhekimpilo', 'Philani', 'Themba', 'Thembelani', 'Sikhumbuzo', 'Sithandazile', 'Langa', 'Langelihle', 'Ntokozo', 'Ntando', 'Ntandoyenkosi', 'Nhlalo', 'Nonhlanhla', 'Nomagugu', 'Gugulethu', 'Sthandisiwe', 'Sthandekile', 'Thandazani', 'Mqabuko', 'Nqinekile', 'Bekithemba', 'Nomaqhawe', 'Lifa', 'Lifalakhe', 'Andile', 'Anele', 'Mqondisi', 'Lungisani', 'Qhawe', 'Sukoluhle', 'Suku', 'Ndodana', 'Njabulo', 'Khethiwe', 'Ndabezinhle', 'Ndaba', 'Tholumusa', 'Hlengiwe', 'Sihlengisizwe', 'Sitshengisiwe', 'Nothando', 'Nomusa', 'Nomathemba', 'Nomaqhawe', 'Musa', 'Nkanyiso', 'Sikhanyile', 'Gugulethu', 'Mpilo', 'Nosipho', 'Sipho', 'Nkululeko', 'Thandeka', 'Zanele', 'Bhekani', 'Ntokozo', 'Sifiso', 'Siyanda', 'Thabisani', 'Njabulo', 'Zodwa', 'Thembeka', 'Philile', 'Londiwe', 'Sibusiso', 'Noluthando', 'Nkosinathi', 'Thulile', 'Sindisiwe', 'Siphamandla', 'Sipho', 'Sizwe', 'Sanele', 'Siyabulela', 'Saneh', 'Phiwokuhle', 'Nokwanda', 'Nokubonga', 'Nkosingiphile', 'Nokuphila', 'Nomvula', 'Nolwazi', 'Nokwethemba', 'Nokulunga', 'Nkazimulo', 'Khululiwe', 'Kwanele', 'Kwenzakwenkosi', 'Thina', 'Sanele', 'Sibusisiwe', 'Tholwethu', 'Thabang', 'Thandekile', 'Mbalienhle', 'Mandisi', 'Mfundo', 'Mvelo', 'Mthobisi', 'Nompumelelo', 'Nomcebo', 'Nkosinathi', 'Nqobile', 'Omphemetse', 'Onkarabile', 'Onkabetse', 'Onkgopotse', 'Palesa', 'Phiwokwakhe', 'Phiwokwethemba', 'Phumzile', 'Pono', 'Reabetsoe', 'Realeboga', 'Reamogetse', 'Refiloe', 'Saneliswa', 'Sbongakonke', 'Sekelani', 'Sibusiso', 'Sihle', 'Simphiwe', 'Siphokazi', 'Sizakele', 'Sizolwethu', 'Snenhlanhla', 'Sphamandla', 'Thembalihle', 'Thembisile', 'Thokozile', 'Thulisile', 'Tumelo', 'Vuyolwethu', 'Wandile', 'Xolile'],
        English: ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emma', 'Daniel', 'Olivia', 'James', 'Sophia'],
      },
      lastNames: {
        Shona: ['Gumbo','Hove', 'Shoko', 'Mapfumo', 'Simango', 'Masuku', 'Marufu', 'Mudenda', 'Makoni', 'Muyambo', 'Nyandoro','Chuma', 'Takawira', 'Chauke', 'Zuze', 'Muchenje', 'Sigauke', 'Munemo',  'Mudzingwa', 'Taruvinga', 'Mutasa', 'Mahachi', 'Katsande', 'Ndoro', 'Mbedzi', 'Chari', 'Muza', 'Munsaka', 'Mapuranga', 'Mutero', 'Maseko', 'Nyika', 'Muchemwa', 'Mubaiwa', 'Mudimba', 'Sande', 'Gondo', 'Chiwara', 'Munetsi', 'Mushonga',  'Kaseke', 'Chifamba', 'Mumpande', 'Mabhena', 'Nyamadzawo', 'Mangena', 'Makaza','Shava', 'Masango', 'Tigere', 'Manyika', 'Gatsi', 'Shereni', 'Makumbe',  'Shonhiwa', 'Muzamba', 'Mandaza', 'Magaya', 'Mangwiro', 'Gwenzi', 'Ruzvidzo', 'Nyakudya', 'Tapera', 'Makombe', 'Madondo', 'Mguni', 'Mabika', 'Chibanda', 'Mandizvidza', 'Makore', 'Muzenda', 'Mwale', 'Mugwagwa', 'Mugabe', 'Hungwe', 'Majoni', 'Chibaya', 'Matambo', 'Masawi', 'Machingura', 'Gomo', 'Rusere', 'Nyamande', 'Makuyana', 'Mashiri', 'Mutema', 'Musonza', 'Muchena','Chakanyuka', 'Gumede', 'Masunda',  'Matsika', 'Zenda', 'Chikukwa', 'Matope', 'Chimombe', 'Jongwe', 'Makina', 'Vambe','Mugari', 'Jonasi', 'Rwodzi', 'Chiyangwa', 'Zondo', 'Mutizwa', 'Zimunya', 'Mutanga', 'Mwinde', 'Musiiwa', 'Chamunorwa', 'Denhere', 'Jani', 'Zindoga', 'Mavhura', 'Munkombwe', 'Maramba', 'Njanji', 'Machona', 'Masocha', 'Madamombe',  'Chirwa', 'Makiwa', 'Saidi', 'Gwatidzo', 'Mawere', 'Matongo', 'Matiza', 'Simbi', 'Chinembiri',  'Zimuto', 'Charamba', 'Mapurisa', 'Zhakata', 'Mazarura', 'Mhembere', 'Jimu', 'Marange', 'Sibindi', 'Matare', 'Mwanza', 'Mkwananzi', 'Ngorima', 'Musarurwa', 'Mutize', 'Muzanenhamo', 'Mujuru', 'Motsi', 'Murwira', 'Mwembe', 'Chinyama', 'Mbewe', 'Marowa', 'Katiyo', 'Paradza', 'Nyikadzino', 'Mawire', 'Chiweshe', 'Mamvura', 'Munyoro', 'Marimo', 'Muzondo', 'Maponga', 'Tafirenyika', 'James', 'Mugadza', 'Ngirazi', 'Hadebe', 'Tsuro', 'Khupe', 'Masiya', 'Shoniwa', 'Mashingaidze', 'Mafuta', 'Mashava', 'Msipa', 'Siwela', 'Taderera', 'Mashonganyika', 'Mudimu', 'Tavengwa', 'Mhaka', 'Nhamo', 'Kunaka', 'Mafukidze', 'Chirume', 'Madziva','Marume', 'Madzinga', 'Musariri', 'Chikomo', 'Manjengwa', 'Kwaramba', 'Nyamayaro', 'Mhike', 'Gumpo', 'Antonio', 'Nyakabau', 'Mavhunga', 'Nyamukondiwa', 'Gono', 'Saungweme', 'Shamu', 'Chamboko', 'Choto', 'Kwenda', 'Mashoko', 'Mugande', 'Mukono', 'Chipunza', 'Gore', 'Mudavanhu', 'Sango', 'Nyama', 'Tinarwo', 'Chikuni', 'Kanyemba', 'Mafu', 'Makosa', 'Chinyanga', 'Ngoma',  'Rusike', 'Nsingo', 'Mhandu', 'Makusha', 'Shiri', 'Zisengwe', 'Munenge', 'Nyambo', 'Shambare', 'Moyana', 'Mushore', 'Masuka', 'Macheka', 'Tanyanyiwa', 'Kufa', 'Mangezi', 'Runesu', 'Matanda', 'Matema', 'Matutu', 'Mbano', 'Bere', 'Mhizha', 'Mafunga', 'Gurure', 'Chimedza', 'Tomu', 'Mataruse', 'Makwara', 'Tsiga', 'Goredema', 'Tapfumaneyi','Chinyoka', 'Mangwende', 'Chivasa', 'Mandeya', 'Machaya', 'Chabata', 'Charuma', 'Matanhire', 'Choga', 'Zinyemba', 'Khumbula', 'Gambiza',  'Machaka', 'Tapfuma', 'Musara', 'Madzima', 'Madziwa', 'Mbofana', 'Pedzisai', 'Matenga', 'Chikwanda', 'Manyere', 'Munyaradzi', 'Jeke', 'Dzapasi', 'Mhere', 'Gutu', 'Ngwerume', 'Mumba'],
        Ndebele: ['Moyo', 'Ncube', 'Sibanda', 'Dube', 'Ndlovu', 'Mpofu', 'Sithole', 'Ngwenya', 'Phiri', 'Tshuma', 'Nyoni', 'Nkomo', 'Nyathi', 'Ndhlovu', 'Mhlanga', 'Khumalo', 'Zhou', 'Banda', 'Shumba', 'Bhebhe', 'Ndebele', 'Muleya', 'Siziba', 'Ndou', 'Maphosa', 'Tembo','Mlambo', 'Dhliwayo',  'Maposa',, 'Mlilo', 'Zulu', 'Mathe',  'Mpala','Lunga', 'Nkala','Dlamini', 'Dlodlo', 'Vundla', 'Hlabangana', 'Sikhosana','Munkuli', 'Ngulube','Ntini', 'Nkomazana',  'Mlalazi',  'Nkiwane','Mlotshwa', 'Musekiwa', 'Dhlamini', 'Mahlangu','Mtetwa','Ndiweni','Mkandla', 'Mutandwa',  'Nxumalo', 'Malunga','Mnkandla','Mtisi', 'Mlauzi','Nduna', 'Meki', 'Sakala','Tshabalala', 'Mutale',  'Khanye',],
        English: ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'King', 'Wright', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook'],
      },
      citySuburbs: {
        Harare: ['Avondale', 'Borrowdale', 'Mount Pleasant', 'Mbare', 'Mabelreign'],
        Bulawayo: ['Hillside', 'Kumalo', 'Selborne Park', 'Barham Green', 'Waterford'],
        Chitungwiza: ['Zengeza', 'St Marys', 'Seke', 'Nyatsime', 'Unit L'],
        Mutare: ['Murambi', 'Dangamvura', 'Darlington', 'Morningside', 'Fairbridge Park'],
        Gweru: ['Lundi Park', 'Windsor Park', 'Senga', 'Athlone', 'Ridgemont'],
      },
      streetNames:{
        Harare: ['Avondale', 'Borrowdale', 'Mount Pleasant', 'Mbare', 'Mabelreign', 'Dawnvile', 'Hatfield', 'Highfields', 'Kambuzuma', 'GlenView', 'Waterfalls', 'Epworth', 'Crambone', 'Highlands', 'Chisipite', 'Westgate', 'Westlea', 'Eastlea', ],
        Bulawayo: ['Hillside', 'Kumalo', 'Selborne Park', 'Barham Green', 'Waterford'],
        Chitungwiza: ['Zengeza', 'St Marys', 'Seke', 'Nyatsime', 'Unit L'],
        Mutare: ['Murambi', 'Dangamvura', 'Darlington', 'Morningside', 'Fairbridge Park'],
        Gweru: ['Lundi Park', 'Windsor Park', 'Senga', 'Athlone', 'Ridgemont'],
      }
    }
  }
};



function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomName() {
  //language = config['language'];
  const lang = getRandomElement(language);
  if (lang === 'English'){

  }
  const firstName = getRandomElement(firstNames[lang]);
  const lastName = getRandomElement(lastNames[lang]);
  return `${firstName} ${lastName}`;
}

function getEmail(name){
  const lastName = getRandomElement(emailHosts);
  const cleanedName = name.replace(/\s+/g, '').toLowerCase();
  return `${cleanedName}@${lastName}.com`;
}

function getRandomDateOfBirth(minAge = 18, maxAge = 100) {
  const now = new Date();
  const startYear = now.getFullYear() - maxAge;
  const endYear = now.getFullYear() - minAge;
  const randomYear = Math.floor(Math.random() * (endYear - startYear)) + startYear;
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 28) + 1;
  const randomDate = new Date(randomYear, randomMonth, randomDay);
  return randomDate.toLocaleDateString();
}

const streetNames = [
  'First Street', 'Second Street', 'Third Street', 'Fourth Street', 'Fifth Street', 'Sixth Street', 'Seventh Street', 'Eighth Street', 'Ninth Street', 'Tenth Street'
];

const cities = [
  'Harare', 'Bulawayo', 'Chitungwiza', 'Mutare', 'Gweru', 'Kwekwe', 'Kadoma', 'Masvingo', 'Chinhoyi', 'Marondera'
];

const provinces = [
  'Mashonaland West', 'Mashonaland East', 'Mashonaland Central', 'Manicaland', 'Midlands', 'Matabeleland North', 'Matabeleland South', 'Masvingo', 'Bulawayo', 'Harare'
];


function getRandomCitySuburb() {
  const city = getRandomElement(Object.keys(citySuburbs));
  const suburb = getRandomElement(citySuburbs[city]);
  return { city, suburb };
}

function getRandomAddress() {
  const { city, suburb } = getRandomCitySuburb();
  const streetNumber = Math.floor(Math.random() * 100) + 1;
  const streetName = getRandomElement(streetNames);
  return `${city}, ${suburb}, ${streetNumber} ${streetName}`;
}

module.exports = {
  getRandomName,
  getRandomDateOfBirth,
  getEmail,
  getRandomAddress
};
