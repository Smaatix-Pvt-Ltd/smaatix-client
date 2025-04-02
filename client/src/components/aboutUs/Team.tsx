import React from 'react'

const Team = () => {
  return (
      <section className='meet-our-team bg-gray-900 py-20 px-5'>
          <h2 className='text-4xl mb-10 text-purple-800 text-center'>
              Meet Our Team
          </h2>
          <div className='team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto'>
              <div className='team-member bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur transition-transform hover:translate-y-[-10px]'>
                  <img
                      src='https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg'
                      alt='Team Member'
                      className='w-24 h-24 rounded-full mb-2'
                  />
                  <h3 className='text-xl'>John Doe</h3>
                  <p>CEO & Founder</p>
              </div>
              <div className='team-member bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur transition-transform hover:translate-y-[-10px]'>
                  <img
                      src='https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg'
                      alt='Team Member'
                      className='w-24 h-24 rounded-full mb-2'
                  />
                  <h3 className='text-xl'>Jane Smith</h3>
                  <p>CTO</p>
              </div>
              <div className='team-member bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur transition-transform hover:translate-y-[-10px]'>
                  <img
                      src='https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg'
                      alt='Team Member'
                      className='w-24 h-24 rounded-full mb-2'
                  />
                  <h3 className='text-xl'>Mike Johnson</h3>
                  <p>Lead Developer</p>
              </div>
          </div>
      </section>
  );
}

export default Team
