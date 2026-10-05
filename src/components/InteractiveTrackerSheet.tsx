import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, Calendar, MessageSquare, Download, Sparkles, Filter } from 'lucide-react';
import { EIGHT_STEPS } from '../data/productData.ts';

export interface LeadRecord {
  id: string;
  handle: string;
  triggerType: string;
  stage: number;
  notes: string;
  nextFollowUp: string;
  bookedCall: boolean;
}

const INITIAL_LEADS: LeadRecord[] = [
  {
    id: '1',
    handle: '@marcus_lifts',
    triggerType: 'Story Poll: Fat Loss',
    stage: 4,
    notes: 'Stuck at 2,000 cals, sent 15-min roadmap offer',
    nextFollowUp: 'Today, 4:00 PM',
    bookedCall: false
  },
  {
    id: '2',
    handle: '@sarah_triathlete',
    triggerType: 'Reel Comment: Knee Pain',
    stage: 5,
    notes: 'Requested calendar link, sent Thursday 2pm / Friday 10am slots',
    nextFollowUp: 'Tomorrow, 10:00 AM',
    bookedCall: false
  },
  {
    id: '3',
    handle: '@jordan_crossfit',
    triggerType: 'Inbound DM: Coaching',
    stage: 7,
    notes: 'Zoom call scheduled for Thursday 3pm ($250/mo candidate)',
    nextFollowUp: 'Thursday, 11:00 AM (Send No-Show Save)',
    bookedCall: true
  }
];

export const InteractiveTrackerSheet: React.FC = () => {
  const [leads, setLeads] = useState<LeadRecord[]>(INITIAL_LEADS);
  const [filterStage, setFilterStage] = useState<number | 'all'>('all');
  const [newHandle, setNewHandle] = useState('');
  const [newTrigger, setNewTrigger] = useState('Story Reaction');
  const [newNotes, setNewNotes] = useState('');

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHandle.trim()) return;

    const newLead: LeadRecord = {
      id: Date.now().toString(),
      handle: newHandle.startsWith('@') ? newHandle : `@${newHandle}`,
      triggerType: newTrigger,
      stage: 1,
      notes: newNotes.trim() || 'New conversation started',
      nextFollowUp: 'Within 24 hours',
      bookedCall: false
    };

    setLeads([newLead, ...leads]);
    setNewHandle('');
    setNewNotes('');
  };

  const handleStageChange = (id: string, newStage: number) => {
    setLeads(leads.map(lead => {
      if (lead.id === id) {
        return {
          ...lead,
          stage: newStage,
          bookedCall: newStage >= 5 ? lead.bookedCall : false
        };
      }
      return lead;
    }));
  };

  const toggleBooked = (id: string) => {
    setLeads(leads.map(lead => {
      if (lead.id === id) {
        const isBooked = !lead.bookedCall;
        return {
          ...lead,
          bookedCall: isBooked,
          stage: isBooked && lead.stage < 5 ? 5 : lead.stage
        };
      }
      return lead;
    }));
  };

  const handleDelete = (id: string) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const exportCSV = () => {
    const headers = ['Instagram Handle', 'Trigger Type', 'Current Stage (1-8)', 'Stage Name', 'Next Follow Up', 'Booked Call', 'Notes'];
    const rows = leads.map(l => {
      const step = EIGHT_STEPS.find(s => s.number === l.stage);
      return [
        `"${l.handle}"`,
        `"${l.triggerType}"`,
        l.stage,
        `"${step?.title || ''}"`,
        `"${l.nextFollowUp}"`,
        l.bookedCall ? 'YES' : 'NO',
        `"${l.notes.replace(/"/g, '""')}"`
      ];
    });

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'DM-to-Deposit-Tracking-Sheet.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = filterStage === 'all' 
    ? leads 
    : leads.filter(l => l.stage === filterStage);

  return (
    <div className="rounded-2xl bg-white border border-[#ECEAE1] p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#ECEAE1]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BA8338]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#BA8338]">
              Day 1 Interactive Tracking Sheet
            </span>
          </div>
          <h4 className="text-xl font-bold font-serif text-[#0D1B2A]">
            Active Pipeline & Follow-Up System
          </h4>
          <p className="text-xs text-[#5E6A7A]">
            Add prospects, move them through the 8 stages, and make sure zero leads are dropped.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#0D1B2A] bg-[#FAF9F5] hover:bg-[#F2F0E8] border border-[#ECEAE1] rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-[#BA8338]" />
            <span>Export to CSV / Sheets</span>
          </button>
        </div>
      </div>

      {/* Quick Add Form */}
      <form onSubmit={handleAddLead} className="py-4 border-b border-[#ECEAE1] grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        <div className="sm:col-span-4">
          <input
            type="text"
            placeholder="@handle or lead name"
            value={newHandle}
            onChange={(e) => setNewHandle(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg bg-[#FAF9F5] border border-[#ECEAE1] text-[#0D1B2A] placeholder:text-[#8F94A0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
          />
        </div>
        <div className="sm:col-span-3">
          <select
            value={newTrigger}
            onChange={(e) => setNewTrigger(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg bg-[#FAF9F5] border border-[#ECEAE1] text-[#0D1B2A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
          >
            <option value="Story Poll">Story Poll</option>
            <option value="Story Reaction">Story Reaction</option>
            <option value="Reel Comment">Reel Comment</option>
            <option value="Direct Message">Direct Message</option>
            <option value="Profile Visit">Profile Visit</option>
          </select>
        </div>
        <div className="sm:col-span-3">
          <input
            type="text"
            placeholder="Quick note / bottleneck"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg bg-[#FAF9F5] border border-[#ECEAE1] text-[#0D1B2A] placeholder:text-[#8F94A0] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#BA8338] hover:bg-[#A3702A] rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Lead</span>
          </button>
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 py-3 overflow-x-auto text-[11px]">
        <span className="text-[#8F94A0] mr-1 font-medium flex items-center gap-1">
          <Filter className="w-3 h-3" />
          Filter:
        </span>
        <button
          onClick={() => setFilterStage('all')}
          className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
            filterStage === 'all'
              ? 'bg-[#0D1B2A] text-white font-medium'
              : 'bg-[#FAF9F5] text-[#5E6A7A] hover:bg-[#F2F0E8]'
          }`}
        >
          All Leads ({leads.length})
        </button>
        {EIGHT_STEPS.map(s => {
          const count = leads.filter(l => l.stage === s.number).length;
          return (
            <button
              key={s.number}
              onClick={() => setFilterStage(s.number)}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filterStage === s.number
                  ? 'bg-[#BA8338] text-white font-medium'
                  : 'bg-[#FAF9F5] text-[#5E6A7A] hover:bg-[#F2F0E8]'
              }`}
            >
              {s.number}. {s.title} ({count})
            </button>
          );
        })}
      </div>

      {/* Spreadsheet Table */}
      <div className="overflow-x-auto mt-2 rounded-xl border border-[#ECEAE1]">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#FAF9F5] text-[#0D1B2A] font-semibold border-b border-[#ECEAE1]">
            <tr>
              <th className="p-3">Instagram Handle</th>
              <th className="p-3">Trigger</th>
              <th className="p-3">Current Step (1–8)</th>
              <th className="p-3">Next Action / Follow-Up</th>
              <th className="p-3">Booked Call</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#ECEAE1] text-[#5E6A7A]">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-xs text-[#8F94A0]">
                  No leads in this stage. Click "Add Lead" above to start tracking.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => {
                const step = EIGHT_STEPS.find(s => s.number === lead.stage);

                return (
                  <tr key={lead.id} className="hover:bg-[#FAF9F5]/70 transition-colors">
                    <td className="p-3 font-semibold text-[#0D1B2A]">
                      <span>{lead.handle}</span>
                      <p className="text-[11px] text-[#8F94A0] font-normal truncate max-w-[180px]">
                        {lead.notes}
                      </p>
                    </td>

                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#ECEAE1] text-[11px] text-[#0D1B2A]">
                        {lead.triggerType}
                      </span>
                    </td>

                    <td className="p-3">
                      <select
                        value={lead.stage}
                        onChange={(e) => handleStageChange(lead.id, Number(e.target.value))}
                        className="px-2.5 py-1 text-xs rounded border border-[#ECEAE1] bg-white font-medium text-[#0D1B2A] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#BA8338]"
                      >
                        {EIGHT_STEPS.map(s => (
                          <option key={s.number} value={s.number}>
                            Step {s.number}: {s.title}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="p-3 text-[11px] font-mono text-[#0D1B2A]">
                      {lead.nextFollowUp}
                    </td>

                    <td className="p-3">
                      <button
                        onClick={() => toggleBooked(lead.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                          lead.bookedCall
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-[#FAF9F5] text-[#8F94A0] border border-[#ECEAE1] hover:text-[#0D1B2A]'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${lead.bookedCall ? 'text-emerald-600' : 'text-neutral-400'}`} />
                        <span>{lead.bookedCall ? 'Call Booked' : 'Pending'}</span>
                      </button>
                    </td>

                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-neutral-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                        title="Delete lead"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-[#ECEAE1] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8F94A0]">
        <span>
          Includes 8-Step stage checkpoints, automatic follow-up reminders, and booking verification.
        </span>
        <span className="text-[#BA8338] font-semibold mt-1 sm:mt-0">
          ✓ Ready for Day 1 Implementation
        </span>
      </div>
    </div>
  );
};
